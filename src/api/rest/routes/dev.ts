import {Response, Request, Router, NextFunction} from 'express'
import {stores} from 'src/store'
import {catchAsync} from 'src/api/rest/utils'
import {statsIndexer} from 'src/indexer/indexer/metrics/stats'
import {oneWalletIndexer} from 'src/indexer/indexer/metrics/oneWallet'

export const devRouter = Router({mergeParams: true})
// statsIndexer()
oneWalletIndexer()

devRouter.get('/ping', catchAsync(devFunction))

export async function devFunction(req: Request, res: Response, next: NextFunction) {
  return res.json({success: false})
}
