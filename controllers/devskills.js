import * as devSkillsDb from '../data/devskills-db.js'

function index (req, res) {
  devSkillsDb.find({}, function(error, devSkills) {
    res.render('devskills/index', {
      devSkills: devSkills,
      error: error
    })
  })
}

function show(req, res) {
  devSkillsDb.findById(req.params.id, function(error, skill) {
    res.render('devskills/show', {
      skill: skill,
      error: error
    })
  })
}

export {
  index,
  show
}