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

function newSkill(req, res){
  res.render('devskills/new')
}

function create(req, res){
  // console.log(req.body)
  devSkillsDb.create(req.body, function(error, skill){
    res.redirect('/devskills')
  })
}

function deleteSkill(req, res){
  devSkillsDb.findByIdAndDelete(req.params.id, function(error, skill){
    res.redirect('/devskills')
  })
}

function edit(req, res){
  devSkillsDb.findById(req.params.id, function(error, skill) {
    res.render('devskills/edit', {
      skill: skill,
      error: error
    })
  })
}

export {
  index,
  show,
  newSkill as new,
  create,
  deleteSkill as delete,
  edit,
}