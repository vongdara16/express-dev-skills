const devSkills = [
  {text: 'Javascript', done: true, _id: 97564356},
  {text: 'CSS', done: true, _id: 546454},
  {text: 'HTML', done: true, _id: 3424323},
  {text: 'Git', done: true, _id: 756754},
  {text: 'Node', done: false, _id: 856634543},
]

const find = (conditions, callback) => {
  // see if this works, if not, execute the code in the catch block
  try {
    // make sure that conditions is an object - if not throw a TypeError
    if (!(conditions instanceof Object)){
      throw new TypeError('Please pass in an object')
    }
    // If the object is empty, return all the devSkills
    if (Object.keys(conditions).length === 0) return callback(null, devSkills)
	// deal with errors
  } catch (error) {
    console.log(error)
    callback(error, [])
  }
}

const findById = (id, callback) =>{
  try {
    const skill = devSkills.find(skill => skill._id === parseInt(id))
    if (!skill) throw new Error ('No skill was found')
    return callback(null, skill)
  } catch (error) {
    console.log(error)
    return callback(error, null)
  }
}

function create (skill, callback) {
  skill._id = Date.now() % 1000000
  skill.done = false
  devSkills.push(skill)
  return callback(null, skill)
}

function findByIdAndDelete(id, callback){
  try {
    const idx = devSkills.findIndex(skill => skill._id == parseInt(id))
    const deletedSkill = devSkills.splice(idx, 1)
    if(!deletedSkill.length) throw new Error('No Skill was deleted')
    return callback(null, deletedSkill[0])
  } catch(error) {
    return callback(error, null)
  }
}

export { 
	find,
  findById,
  create,
  findByIdAndDelete
}