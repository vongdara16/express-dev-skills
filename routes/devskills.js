import { Router } from 'express'
import * as devSkillsCtrl from '../controllers/devskills.js'
const router = Router()

/* GET users listing. */
router.get('/', devSkillsCtrl.index)
router.get('/:id', devSkillsCtrl.show)

export {
  router
}
