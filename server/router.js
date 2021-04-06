const router = require('express').Router();
const controller = require('./controller.js');

// Todo: Fill out your routes:
// routes get for all students and posting a student's name
router
  .route('/students')
  .get(controller.students.getStudents)
  .post(controller.students.postName)


// routes student name update
router
  .route('/students/:id')
  .put(controller.students.updateName)


// routes student image
router
  .route('/images')
  .post(controller.images.postImg)


module.exports = router