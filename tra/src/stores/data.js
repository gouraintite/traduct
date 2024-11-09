import {atom} from 'recoil'

const expressionData = atom({
    key: 'item',
    default: []
})

const settedExpression = atom({
    key: 'setted',
    default:     [{
        "id": 10011,
        "name": "testItem",
        "user": 10010,
        "expressions": [
          {
            "id": 10012,
            "langue": "francais",
            "contenu": "je mankjadsflkjldafjkdfge une bananne seul",
            "dictionaryItem": 10011
          },
          {
            "id": 10013,
            "langue": "en",
            "contenu": "I eat bana86f6d98nne seul",
            "dictionaryItem": 10011
          }
        ],
        "translations": [
          {
            "id": 10014,
            "langue": "Jó",
            "contenu": "contMbakaloléǎ mbɔ́ nə́ saŋ mətsʉ pəmbaŋa, pənjwwí, ntǎchyə́... Fɔ́ mphyə ŋkwʉ́ nshòm",
            "audio": "storage/audio/20231021100452886_1536b03d-62a8-4fb9-9153-1af2fd0b135e.mp3",
            "example": "Mbakaloléǎ mbɔ́ nə́ saŋ mətsʉ pəmbaŋa, pənjwwí, ntǎchyə́... Fɔ́ mphyə ŋkwʉ́ nshòm",
            "ditionaryItem": 10011,
          },
  
          {
            "id": 10014,
            "langue": "Jó",
            "contenu": "contMbakaloléǎ mbɔ́ nə́ saŋ mətsʉ pəmbaŋa, pənjwwí, ntǎchyə́... Fɔ́ mphyə ŋkwʉ́ nshòm",
            "audio": "storage/audio/20231021100452886_1536b03d-62a8-4fb9-9153-1af2fd0b135e.mp3",
            "example": "Mbakaloléǎ mbɔ́ nə́ saŋ mətsʉ pəmbaŋa, pənjwwí, ntǎchyə́... Fɔ́ mphyə ŋkwʉ́ nshòm",
            "ditionaryItem": 10011,
          }
        ]
  }]
})

export {expressionData, settedExpression}