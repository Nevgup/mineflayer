const mineflayer = require('mineflayer');


const bot = mineflayer.createBot({
    version: 1.12,
    host: 'ip-address',
    username: 'email',
    password: 'password',
    verbose: true
})


    bot._client.on('entity_velocity', v => {
        if (bot.entity.id !== v.entityId) return
        setTimeout(() => {
            bot.entity.velocity.x = v.velocityX / 256
            bot.entity.velocity.y = v.velocityY / 512 * 1.5
            bot.entity.velocity.z = v.velocityZ / 256
        }, 0)
    })






})
