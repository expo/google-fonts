# @expo-google-fonts/playwrite-gb-s

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/playwrite-gb-s)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/playwrite-gb-s)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/playwrite-gb-s)

This package lets you use the [**Playwrite GB S**](https://fonts.google.com/specimen/Playwrite+GB+S) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Playwrite GB S

![Playwrite GB S](./font-family.png)

This font family contains [8 styles](#-gallery).

- `PlaywriteGBS_100Thin`
- `PlaywriteGBS_200ExtraLight`
- `PlaywriteGBS_300Light`
- `PlaywriteGBS_400Regular`
- `PlaywriteGBS_100Thin_Italic`
- `PlaywriteGBS_200ExtraLight_Italic`
- `PlaywriteGBS_300Light_Italic`
- `PlaywriteGBS_400Regular_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/playwrite-gb-s expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/playwrite-gb-s/useFonts';
import { PlaywriteGBS_100Thin } from '@expo-google-fonts/playwrite-gb-s/100Thin';
import { PlaywriteGBS_200ExtraLight } from '@expo-google-fonts/playwrite-gb-s/200ExtraLight';
import { PlaywriteGBS_300Light } from '@expo-google-fonts/playwrite-gb-s/300Light';
import { PlaywriteGBS_400Regular } from '@expo-google-fonts/playwrite-gb-s/400Regular';
import { PlaywriteGBS_100Thin_Italic } from '@expo-google-fonts/playwrite-gb-s/100Thin_Italic';
import { PlaywriteGBS_200ExtraLight_Italic } from '@expo-google-fonts/playwrite-gb-s/200ExtraLight_Italic';
import { PlaywriteGBS_300Light_Italic } from '@expo-google-fonts/playwrite-gb-s/300Light_Italic';
import { PlaywriteGBS_400Regular_Italic } from '@expo-google-fonts/playwrite-gb-s/400Regular_Italic';

export default () => {

  let [fontsLoaded] = useFonts({
    PlaywriteGBS_100Thin, 
    PlaywriteGBS_200ExtraLight, 
    PlaywriteGBS_300Light, 
    PlaywriteGBS_400Regular, 
    PlaywriteGBS_100Thin_Italic, 
    PlaywriteGBS_200ExtraLight_Italic, 
    PlaywriteGBS_300Light_Italic, 
    PlaywriteGBS_400Regular_Italic
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return null;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "PlaywriteGBS_100Thin"
        }}>
          Playwrite GB S Thin
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "PlaywriteGBS_200ExtraLight"
        }}>
          Playwrite GB S Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "PlaywriteGBS_300Light"
        }}>
          Playwrite GB S Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "PlaywriteGBS_400Regular"
        }}>
          Playwrite GB S Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "PlaywriteGBS_100Thin_Italic"
        }}>
          Playwrite GB S Thin Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "PlaywriteGBS_200ExtraLight_Italic"
        }}>
          Playwrite GB S Extra Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "PlaywriteGBS_300Light_Italic"
        }}>
          Playwrite GB S Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "PlaywriteGBS_400Regular_Italic"
        }}>
          Playwrite GB S Italic
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![PlaywriteGBS_100Thin](./100Thin/PlaywriteGBS_100Thin.ttf.png)|![PlaywriteGBS_200ExtraLight](./200ExtraLight/PlaywriteGBS_200ExtraLight.ttf.png)|![PlaywriteGBS_300Light](./300Light/PlaywriteGBS_300Light.ttf.png)||
|![PlaywriteGBS_400Regular](./400Regular/PlaywriteGBS_400Regular.ttf.png)|![PlaywriteGBS_100Thin_Italic](./100Thin_Italic/PlaywriteGBS_100Thin_Italic.ttf.png)|![PlaywriteGBS_200ExtraLight_Italic](./200ExtraLight_Italic/PlaywriteGBS_200ExtraLight_Italic.ttf.png)||
|![PlaywriteGBS_300Light_Italic](./300Light_Italic/PlaywriteGBS_300Light_Italic.ttf.png)|![PlaywriteGBS_400Regular_Italic](./400Regular_Italic/PlaywriteGBS_400Regular_Italic.ttf.png)|||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/playwrite-gb-s` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Playwrite GB S page on Google Fonts](https://fonts.google.com/specimen/Playwrite+GB+S) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Playwrite GB S on Google Fonts](https://fonts.google.com/specimen/Playwrite+GB+S)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/playwrite-gb-s)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/playwrite-gb-s)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
