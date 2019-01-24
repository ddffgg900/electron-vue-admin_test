// import request from '@/utils/request'
import ajax from '@/utils/ajax'
// import env from '@/env'

export function getStations () {
  return ajax({
    url: '/NodeInfo',
    method: 'get'
  })
}

export function getChoseStations () {
  return ajax({
    url: '/NodeChose',
    method: 'get'
  })
  // return []
}

export function getPolices () {
  return ajax({
    url: '/StrategyInfo',
    method: 'get'
  })
}

export function getLaneInfo () {
  return ajax({
    url: '/LaneInfo',
    method: 'get'
  })
}

export function getCoreData () {
  return ajax({
    url: '/CoreData',
    method: 'get'
  })
}

export function setPolices (polices) {
  return ajax({
    url: '/StrategyInfo',
    method: 'post',
    data: {
      data: polices
    }
  })
}

export function setChoseStations (stations) {
  return ajax({
    url: '/NodeChose',
    method: 'post',
    data: {
      data: stations
    }
  })
}
