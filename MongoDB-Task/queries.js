// 1. Find all the topics and tasks which are taught in the month of October 2020

// Topics in October
db.topics.find({
    date: {
      $gte: "2020-10-01",
      $lte: "2020-10-31"
    }
  })
  
// Tasks in October
db.tasks.find({
    date: {
      $gte: "2020-10-01",
      $lte: "2020-10-31"
    }
  })
  

  
// 2. Find all the company drives which appeared between 15-Oct-2020 and 31-Oct-2020

db.company_drives.find({
    date: {
      $gte: "2020-10-15",
      $lte: "2020-10-31"
    }
  })
  


// 3. Find all the company drives and students who appeared for the placement

db.company_drives.aggregate([
    {
      $lookup: {
        from: "users",
        localField: "student_ids",
        foreignField: "_id",
        as: "students"
      }
    }
  ])



// 4. Find the number of problems solved by each user in codekata

db.codekata.aggregate([
    {
      $lookup: {
        from: "users",
        localField: "user_id",
        foreignField: "_id",
        as: "user_info"
      }
    },
    {
      $unwind: "$user_info"
    },
    {
      $project: {
        _id: 0,
        user: "$user_info.name",
        problems_solved: 1
      }
    }
  ])



// 5. Find all the mentors who have more than 15 mentees

db.users.aggregate([
    {
      $group: {
        _id: "$mentor_id",
        mentee_count: { $sum: 1 }
      }
    },
    {
      $match: {
        mentee_count: { $gt: 15 }
      }
    },
    {
      $lookup: {
        from: "mentors",
        localField: "_id",
        foreignField: "_id",
        as: "mentor_info"
      }
    },
    {
      $unwind: "$mentor_info"
    },
    {
      $project: {
        _id: 0,
        mentor_name: "$mentor_info.name",
        mentee_count: 1
      }
    }
  ])
// (You can increase data to test this by adding more users with same mentor_id)



// 6. Find the number of users who were absent and didn’t submit the task between 15-Oct-2020 and 31-Oct-2020

db.attendance.aggregate([
    {
      $match: {
        date: { $gte: "2020-10-15", $lte: "2020-10-31" },
        present: false
      }
    },
    {
      $lookup: {
        from: "tasks",
        let: { uid: "$user_id" },
        pipeline: [
          {
            $match: {
              $expr: {
                $and: [
                  { $eq: ["$user_id", "$$uid"] },
                  { $eq: ["$submitted", false] },
                  { $gte: ["$date", "2020-10-15"] },
                  { $lte: ["$date", "2020-10-31"] }
                ]
              }
            }
          }
        ],
        as: "unsubmitted_tasks"
      }
    },
    {
      $match: {
        "unsubmitted_tasks.0": { $exists: true }
      }
    },
    {
      $count: "absent_and_task_not_submitted"
    }
  ])


