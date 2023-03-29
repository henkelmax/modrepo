import fs from 'fs'
import path from 'path'

export default {
    async load() {
        const hosters = {}

        const hostersFolder = path.join(__dirname, 'hosters')
        const hosterFiles = fs.readdirSync(hostersFolder)
        for (const fileName of hosterFiles) {
            const filePath = path.join(hostersFolder, fileName)
            const json = JSON.parse(fs.readFileSync(filePath, 'utf-8'))
            hosters[path.parse(fileName).name] = json
        }

        return hosters
    }
}