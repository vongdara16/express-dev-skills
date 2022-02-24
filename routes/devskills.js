import { Router } from 'express'
import * as devSkillsCtrl from '../controllers/devskills.js'
const router = Router()

/* GET users listing. */
router.get('/', devSkillsCtrl.index)
router.get('/new', devSkillsCtrl.new)
router.get('/:id', devSkillsCtrl.show)
router.post('/', devSkillsCtrl.create)

export {
  router
}
