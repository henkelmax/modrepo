import fs from 'node:fs'
import path from 'node:path'


type Path = {
  params: {
    hoster: string
  }
}

export default {
  paths(): Path[] {
    const hosterFiles = fs.readdirSync(path.join(__dirname, 'hosters'))

    const paths: Path[] = []

    for (const fileName of hosterFiles) {
      paths.push({ params: { hoster: path.parse(fileName).name } })
    }
    
    return paths
  }
}