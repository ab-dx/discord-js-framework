module.exports = {
    status( prefix, client ){
        return [
      { activity: { name: `${prefix}help`, type: "PLAYING" }, status: 'online' },
      { activity: { name: `${prefix}help`, type: "LISTENING" }, status: 'online' },
      { activity: { name: `${client.guilds.cache.size} servers`, type: "WATCHING" }, status: 'online' }
    ]
  }
}
