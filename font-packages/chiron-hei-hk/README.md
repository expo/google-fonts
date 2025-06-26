# @expo-google-fonts/chiron-hei-hk

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/chiron-hei-hk)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/chiron-hei-hk)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/chiron-hei-hk)

This package lets you use the [**Chiron Hei HK**](https://fonts.google.com/specimen/Chiron+Hei+HK) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Chiron Hei HK

![Chiron Hei HK](./font-family.png)

This font family contains [16 styles](#-gallery).

- `ChironHeiHK_200ExtraLight`
- `ChironHeiHK_300Light`
- `ChironHeiHK_400Regular`
- `ChironHeiHK_500Medium`
- `ChironHeiHK_600SemiBold`
- `ChironHeiHK_700Bold`
- `ChironHeiHK_800ExtraBold`
- `ChironHeiHK_900Black`
- `ChironHeiHK_200ExtraLight_Italic`
- `ChironHeiHK_300Light_Italic`
- `ChironHeiHK_400Regular_Italic`
- `ChironHeiHK_500Medium_Italic`
- `ChironHeiHK_600SemiBold_Italic`
- `ChironHeiHK_700Bold_Italic`
- `ChironHeiHK_800ExtraBold_Italic`
- `ChironHeiHK_900Black_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/chiron-hei-hk expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/chiron-hei-hk/useFonts';
import { ChironHeiHK_200ExtraLight } from '@expo-google-fonts/chiron-hei-hk/200ExtraLight';
import { ChironHeiHK_300Light } from '@expo-google-fonts/chiron-hei-hk/300Light';
import { ChironHeiHK_400Regular } from '@expo-google-fonts/chiron-hei-hk/400Regular';
import { ChironHeiHK_500Medium } from '@expo-google-fonts/chiron-hei-hk/500Medium';
import { ChironHeiHK_600SemiBold } from '@expo-google-fonts/chiron-hei-hk/600SemiBold';
import { ChironHeiHK_700Bold } from '@expo-google-fonts/chiron-hei-hk/700Bold';
import { ChironHeiHK_800ExtraBold } from '@expo-google-fonts/chiron-hei-hk/800ExtraBold';
import { ChironHeiHK_900Black } from '@expo-google-fonts/chiron-hei-hk/900Black';
import { ChironHeiHK_200ExtraLight_Italic } from '@expo-google-fonts/chiron-hei-hk/200ExtraLight_Italic';
import { ChironHeiHK_300Light_Italic } from '@expo-google-fonts/chiron-hei-hk/300Light_Italic';
import { ChironHeiHK_400Regular_Italic } from '@expo-google-fonts/chiron-hei-hk/400Regular_Italic';
import { ChironHeiHK_500Medium_Italic } from '@expo-google-fonts/chiron-hei-hk/500Medium_Italic';
import { ChironHeiHK_600SemiBold_Italic } from '@expo-google-fonts/chiron-hei-hk/600SemiBold_Italic';
import { ChironHeiHK_700Bold_Italic } from '@expo-google-fonts/chiron-hei-hk/700Bold_Italic';
import { ChironHeiHK_800ExtraBold_Italic } from '@expo-google-fonts/chiron-hei-hk/800ExtraBold_Italic';
import { ChironHeiHK_900Black_Italic } from '@expo-google-fonts/chiron-hei-hk/900Black_Italic';

export default () => {

  let [fontsLoaded] = useFonts({
    ChironHeiHK_200ExtraLight, 
    ChironHeiHK_300Light, 
    ChironHeiHK_400Regular, 
    ChironHeiHK_500Medium, 
    ChironHeiHK_600SemiBold, 
    ChironHeiHK_700Bold, 
    ChironHeiHK_800ExtraBold, 
    ChironHeiHK_900Black, 
    ChironHeiHK_200ExtraLight_Italic, 
    ChironHeiHK_300Light_Italic, 
    ChironHeiHK_400Regular_Italic, 
    ChironHeiHK_500Medium_Italic, 
    ChironHeiHK_600SemiBold_Italic, 
    ChironHeiHK_700Bold_Italic, 
    ChironHeiHK_800ExtraBold_Italic, 
    ChironHeiHK_900Black_Italic
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
          fontFamily: "ChironHeiHK_200ExtraLight"
        }}>
          Chiron Hei HK Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ChironHeiHK_300Light"
        }}>
          Chiron Hei HK Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ChironHeiHK_400Regular"
        }}>
          Chiron Hei HK Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ChironHeiHK_500Medium"
        }}>
          Chiron Hei HK Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ChironHeiHK_600SemiBold"
        }}>
          Chiron Hei HK Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ChironHeiHK_700Bold"
        }}>
          Chiron Hei HK Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ChironHeiHK_800ExtraBold"
        }}>
          Chiron Hei HK Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ChironHeiHK_900Black"
        }}>
          Chiron Hei HK Black
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ChironHeiHK_200ExtraLight_Italic"
        }}>
          Chiron Hei HK Extra Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ChironHeiHK_300Light_Italic"
        }}>
          Chiron Hei HK Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ChironHeiHK_400Regular_Italic"
        }}>
          Chiron Hei HK Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ChironHeiHK_500Medium_Italic"
        }}>
          Chiron Hei HK Medium Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ChironHeiHK_600SemiBold_Italic"
        }}>
          Chiron Hei HK Semi Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ChironHeiHK_700Bold_Italic"
        }}>
          Chiron Hei HK Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ChironHeiHK_800ExtraBold_Italic"
        }}>
          Chiron Hei HK Extra Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ChironHeiHK_900Black_Italic"
        }}>
          Chiron Hei HK Black Italic
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![ChironHeiHK_200ExtraLight](./200ExtraLight/ChironHeiHK_200ExtraLight.ttf.png)|![ChironHeiHK_300Light](./300Light/ChironHeiHK_300Light.ttf.png)|![ChironHeiHK_400Regular](./400Regular/ChironHeiHK_400Regular.ttf.png)||
|![ChironHeiHK_500Medium](./500Medium/ChironHeiHK_500Medium.ttf.png)|![ChironHeiHK_600SemiBold](./600SemiBold/ChironHeiHK_600SemiBold.ttf.png)|![ChironHeiHK_700Bold](./700Bold/ChironHeiHK_700Bold.ttf.png)||
|![ChironHeiHK_800ExtraBold](./800ExtraBold/ChironHeiHK_800ExtraBold.ttf.png)|![ChironHeiHK_900Black](./900Black/ChironHeiHK_900Black.ttf.png)|![ChironHeiHK_200ExtraLight_Italic](./200ExtraLight_Italic/ChironHeiHK_200ExtraLight_Italic.ttf.png)||
|![ChironHeiHK_300Light_Italic](./300Light_Italic/ChironHeiHK_300Light_Italic.ttf.png)|![ChironHeiHK_400Regular_Italic](./400Regular_Italic/ChironHeiHK_400Regular_Italic.ttf.png)|![ChironHeiHK_500Medium_Italic](./500Medium_Italic/ChironHeiHK_500Medium_Italic.ttf.png)||
|![ChironHeiHK_600SemiBold_Italic](./600SemiBold_Italic/ChironHeiHK_600SemiBold_Italic.ttf.png)|![ChironHeiHK_700Bold_Italic](./700Bold_Italic/ChironHeiHK_700Bold_Italic.ttf.png)|![ChironHeiHK_800ExtraBold_Italic](./800ExtraBold_Italic/ChironHeiHK_800ExtraBold_Italic.ttf.png)||
|![ChironHeiHK_900Black_Italic](./900Black_Italic/ChironHeiHK_900Black_Italic.ttf.png)||||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/chiron-hei-hk` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Chiron Hei HK page on Google Fonts](https://fonts.google.com/specimen/Chiron+Hei+HK) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Chiron Hei HK on Google Fonts](https://fonts.google.com/specimen/Chiron+Hei+HK)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/chiron-hei-hk)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/chiron-hei-hk)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
