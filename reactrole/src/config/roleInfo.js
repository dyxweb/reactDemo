export const menuConfig = [
    {name: '普通用户', route: '/normal', role: ['normal', 'manage', 'highmanage']},
    {name: '管理员', route: '/manage', role: ['manage','highmanage']},
    {name: '高级管理员', route: '/highmanage', role: ['highmanage']},
]

export const roleInfo = [
    {"username": "normal", "password": "123456", "role": "normal"},
    {"username": "manage", "password": "123456", "role": "manage"},
    {"username": "highmanage", "password": "123456", "role": "highmanage"},
]
  
export const routeConfig = [
    {route: '/login', role: ['normal', 'manage', 'highmanage']},
    {route: '/normal', role: ['normal', 'manage', 'highmanage']},
    {route: '/manage', role: ['manage','highmanage']},
    {route: '/highmanage', role: ['highmanage']},
    {route: '/noright', role: ['normal', 'manage', 'highmanage']},
]