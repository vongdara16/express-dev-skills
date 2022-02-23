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

export { 
	find
}