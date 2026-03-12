# @expo-google-fonts/iosevka-charon

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/iosevka-charon)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/iosevka-charon)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/iosevka-charon)

This package lets you use the [**Iosevka Charon**](https://fonts.google.com/specimen/Iosevka+Charon) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Iosevka Charon

![Iosevka Charon](./font-family.png)

This font family contains [8 styles](#-gallery).

- `IosevkaCharon_300Light`
- `IosevkaCharon_300Light_Italic`
- `IosevkaCharon_400Regular`
- `IosevkaCharon_400Regular_Italic`
- `IosevkaCharon_500Medium`
- `IosevkaCharon_500Medium_Italic`
- `IosevkaCharon_700Bold`
- `IosevkaCharon_700Bold_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/iosevka-charon expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/iosevka-charon/useFonts';
import { IosevkaCharon_300Light } from '@expo-google-fonts/iosevka-charon/300Light';
import { IosevkaCharon_300Light_Italic } from '@expo-google-fonts/iosevka-charon/300Light_Italic';
import { IosevkaCharon_400Regular } from '@expo-google-fonts/iosevka-charon/400Regular';
import { IosevkaCharon_400Regular_Italic } from '@expo-google-fonts/iosevka-charon/400Regular_Italic';
import { IosevkaCharon_500Medium } from '@expo-google-fonts/iosevka-charon/500Medium';
import { IosevkaCharon_500Medium_Italic } from '@expo-google-fonts/iosevka-charon/500Medium_Italic';
import { IosevkaCharon_700Bold } from '@expo-google-fonts/iosevka-charon/700Bold';
import { IosevkaCharon_700Bold_Italic } from '@expo-google-fonts/iosevka-charon/700Bold_Italic';

export default () => {

  let [fontsLoaded] = useFonts({
    IosevkaCharon_300Light, 
    IosevkaCharon_300Light_Italic, 
    IosevkaCharon_400Regular, 
    IosevkaCharon_400Regular_Italic, 
    IosevkaCharon_500Medium, 
    IosevkaCharon_500Medium_Italic, 
    IosevkaCharon_700Bold, 
    IosevkaCharon_700Bold_Italic
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
          fontFamily: "IosevkaCharon_300Light"
        }}>
          Iosevka Charon Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "IosevkaCharon_300Light_Italic"
        }}>
          Iosevka Charon Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "IosevkaCharon_400Regular"
        }}>
          Iosevka Charon Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "IosevkaCharon_400Regular_Italic"
        }}>
          Iosevka Charon Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "IosevkaCharon_500Medium"
        }}>
          Iosevka Charon Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "IosevkaCharon_500Medium_Italic"
        }}>
          Iosevka Charon Medium Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "IosevkaCharon_700Bold"
        }}>
          Iosevka Charon Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "IosevkaCharon_700Bold_Italic"
        }}>
          Iosevka Charon Bold Italic
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![IosevkaCharon_300Light](./300Light/IosevkaCharon_300Light.ttf.png)|![IosevkaCharon_300Light_Italic](./300Light_Italic/IosevkaCharon_300Light_Italic.ttf.png)|![IosevkaCharon_400Regular](./400Regular/IosevkaCharon_400Regular.ttf.png)||
|![IosevkaCharon_400Regular_Italic](./400Regular_Italic/IosevkaCharon_400Regular_Italic.ttf.png)|![IosevkaCharon_500Medium](./500Medium/IosevkaCharon_500Medium.ttf.png)|![IosevkaCharon_500Medium_Italic](./500Medium_Italic/IosevkaCharon_500Medium_Italic.ttf.png)||
|![IosevkaCharon_700Bold](./700Bold/IosevkaCharon_700Bold.ttf.png)|![IosevkaCharon_700Bold_Italic](./700Bold_Italic/IosevkaCharon_700Bold_Italic.ttf.png)|||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/iosevka-charon` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Iosevka Charon page on Google Fonts](https://fonts.google.com/specimen/Iosevka+Charon) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Iosevka Charon on Google Fonts](https://fonts.google.com/specimen/Iosevka+Charon)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/iosevka-charon)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/iosevka-charon)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
