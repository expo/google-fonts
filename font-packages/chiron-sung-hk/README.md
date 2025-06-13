# @expo-google-fonts/chiron-sung-hk

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/chiron-sung-hk)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/chiron-sung-hk)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/chiron-sung-hk)

This package lets you use the [**Chiron Sung HK**](https://fonts.google.com/specimen/Chiron+Sung+HK) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Chiron Sung HK

![Chiron Sung HK](./font-family.png)

This font family contains [16 styles](#-gallery).

- `ChironSungHK_200ExtraLight`
- `ChironSungHK_300Light`
- `ChironSungHK_400Regular`
- `ChironSungHK_500Medium`
- `ChironSungHK_600SemiBold`
- `ChironSungHK_700Bold`
- `ChironSungHK_800ExtraBold`
- `ChironSungHK_900Black`
- `ChironSungHK_200ExtraLight_Italic`
- `ChironSungHK_300Light_Italic`
- `ChironSungHK_400Regular_Italic`
- `ChironSungHK_500Medium_Italic`
- `ChironSungHK_600SemiBold_Italic`
- `ChironSungHK_700Bold_Italic`
- `ChironSungHK_800ExtraBold_Italic`
- `ChironSungHK_900Black_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/chiron-sung-hk expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/chiron-sung-hk/useFonts';
import { ChironSungHK_200ExtraLight } from '@expo-google-fonts/chiron-sung-hk/200ExtraLight';
import { ChironSungHK_300Light } from '@expo-google-fonts/chiron-sung-hk/300Light';
import { ChironSungHK_400Regular } from '@expo-google-fonts/chiron-sung-hk/400Regular';
import { ChironSungHK_500Medium } from '@expo-google-fonts/chiron-sung-hk/500Medium';
import { ChironSungHK_600SemiBold } from '@expo-google-fonts/chiron-sung-hk/600SemiBold';
import { ChironSungHK_700Bold } from '@expo-google-fonts/chiron-sung-hk/700Bold';
import { ChironSungHK_800ExtraBold } from '@expo-google-fonts/chiron-sung-hk/800ExtraBold';
import { ChironSungHK_900Black } from '@expo-google-fonts/chiron-sung-hk/900Black';
import { ChironSungHK_200ExtraLight_Italic } from '@expo-google-fonts/chiron-sung-hk/200ExtraLight_Italic';
import { ChironSungHK_300Light_Italic } from '@expo-google-fonts/chiron-sung-hk/300Light_Italic';
import { ChironSungHK_400Regular_Italic } from '@expo-google-fonts/chiron-sung-hk/400Regular_Italic';
import { ChironSungHK_500Medium_Italic } from '@expo-google-fonts/chiron-sung-hk/500Medium_Italic';
import { ChironSungHK_600SemiBold_Italic } from '@expo-google-fonts/chiron-sung-hk/600SemiBold_Italic';
import { ChironSungHK_700Bold_Italic } from '@expo-google-fonts/chiron-sung-hk/700Bold_Italic';
import { ChironSungHK_800ExtraBold_Italic } from '@expo-google-fonts/chiron-sung-hk/800ExtraBold_Italic';
import { ChironSungHK_900Black_Italic } from '@expo-google-fonts/chiron-sung-hk/900Black_Italic';

export default () => {

  let [fontsLoaded] = useFonts({
    ChironSungHK_200ExtraLight, 
    ChironSungHK_300Light, 
    ChironSungHK_400Regular, 
    ChironSungHK_500Medium, 
    ChironSungHK_600SemiBold, 
    ChironSungHK_700Bold, 
    ChironSungHK_800ExtraBold, 
    ChironSungHK_900Black, 
    ChironSungHK_200ExtraLight_Italic, 
    ChironSungHK_300Light_Italic, 
    ChironSungHK_400Regular_Italic, 
    ChironSungHK_500Medium_Italic, 
    ChironSungHK_600SemiBold_Italic, 
    ChironSungHK_700Bold_Italic, 
    ChironSungHK_800ExtraBold_Italic, 
    ChironSungHK_900Black_Italic
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
          fontFamily: "ChironSungHK_200ExtraLight"
        }}>
          Chiron Sung HK Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ChironSungHK_300Light"
        }}>
          Chiron Sung HK Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ChironSungHK_400Regular"
        }}>
          Chiron Sung HK Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ChironSungHK_500Medium"
        }}>
          Chiron Sung HK Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ChironSungHK_600SemiBold"
        }}>
          Chiron Sung HK Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ChironSungHK_700Bold"
        }}>
          Chiron Sung HK Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ChironSungHK_800ExtraBold"
        }}>
          Chiron Sung HK Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ChironSungHK_900Black"
        }}>
          Chiron Sung HK Black
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ChironSungHK_200ExtraLight_Italic"
        }}>
          Chiron Sung HK Extra Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ChironSungHK_300Light_Italic"
        }}>
          Chiron Sung HK Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ChironSungHK_400Regular_Italic"
        }}>
          Chiron Sung HK Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ChironSungHK_500Medium_Italic"
        }}>
          Chiron Sung HK Medium Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ChironSungHK_600SemiBold_Italic"
        }}>
          Chiron Sung HK Semi Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ChironSungHK_700Bold_Italic"
        }}>
          Chiron Sung HK Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ChironSungHK_800ExtraBold_Italic"
        }}>
          Chiron Sung HK Extra Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ChironSungHK_900Black_Italic"
        }}>
          Chiron Sung HK Black Italic
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![ChironSungHK_200ExtraLight](./200ExtraLight/ChironSungHK_200ExtraLight.ttf.png)|![ChironSungHK_300Light](./300Light/ChironSungHK_300Light.ttf.png)|![ChironSungHK_400Regular](./400Regular/ChironSungHK_400Regular.ttf.png)||
|![ChironSungHK_500Medium](./500Medium/ChironSungHK_500Medium.ttf.png)|![ChironSungHK_600SemiBold](./600SemiBold/ChironSungHK_600SemiBold.ttf.png)|![ChironSungHK_700Bold](./700Bold/ChironSungHK_700Bold.ttf.png)||
|![ChironSungHK_800ExtraBold](./800ExtraBold/ChironSungHK_800ExtraBold.ttf.png)|![ChironSungHK_900Black](./900Black/ChironSungHK_900Black.ttf.png)|![ChironSungHK_200ExtraLight_Italic](./200ExtraLight_Italic/ChironSungHK_200ExtraLight_Italic.ttf.png)||
|![ChironSungHK_300Light_Italic](./300Light_Italic/ChironSungHK_300Light_Italic.ttf.png)|![ChironSungHK_400Regular_Italic](./400Regular_Italic/ChironSungHK_400Regular_Italic.ttf.png)|![ChironSungHK_500Medium_Italic](./500Medium_Italic/ChironSungHK_500Medium_Italic.ttf.png)||
|![ChironSungHK_600SemiBold_Italic](./600SemiBold_Italic/ChironSungHK_600SemiBold_Italic.ttf.png)|![ChironSungHK_700Bold_Italic](./700Bold_Italic/ChironSungHK_700Bold_Italic.ttf.png)|![ChironSungHK_800ExtraBold_Italic](./800ExtraBold_Italic/ChironSungHK_800ExtraBold_Italic.ttf.png)||
|![ChironSungHK_900Black_Italic](./900Black_Italic/ChironSungHK_900Black_Italic.ttf.png)||||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/chiron-sung-hk` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Chiron Sung HK page on Google Fonts](https://fonts.google.com/specimen/Chiron+Sung+HK) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Chiron Sung HK on Google Fonts](https://fonts.google.com/specimen/Chiron+Sung+HK)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/chiron-sung-hk)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/chiron-sung-hk)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
