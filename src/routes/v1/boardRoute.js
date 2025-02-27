import express from 'express'
import { StatusCodes } from 'http-status-codes'
import { boardValidation } from '~/validations/boardValidation'
import { boardController } from '~/controllers/boardController'

const Router = express.Router()

Router.route('/')
  .get((req, res) => {
    res.status(StatusCodes.OK).json({ message: 'API get list Boards' })
  })
  .post(boardValidation.createNew, boardController.createNew)

Router.route('/:id')
  .get(boardController.getDetails)
  .put(boardValidation.update, boardController.update)

//Api ho tro cho viec keo tha giua card giua cac column khac nhau
Router.route('/supports/moving_card')
  .put(boardValidation.moveCardToDefferentColumn, boardController.moveCardToDefferentColumn)

export const boardRoute = Router
