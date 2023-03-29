import fs from 'fs'
import path from 'path'

export default {
    async load() {
        const hosters: any[] = []

        const hostersFolder = path.join(__dirname, 'hosters')
        const hosterFiles = fs.readdirSync(hostersFolder)
        for (const fileName of hosterFiles) {
            const filePath = path.join(hostersFolder, fileName)
            const json = JSON.parse(fs.readFileSync(filePath, 'utf-8'))
            hosters.push({
                id: path.parse(fileName).name,
                name: json.name,
            })
        }

        return hosters
    }
}