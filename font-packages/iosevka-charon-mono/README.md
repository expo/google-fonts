# @expo-google-fonts/iosevka-charon-mono

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/iosevka-charon-mono)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/iosevka-charon-mono)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/iosevka-charon-mono)

This package lets you use the [**Iosevka Charon Mono**](https://fonts.google.com/specimen/Iosevka+Charon+Mono) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Iosevka Charon Mono

![Iosevka Charon Mono](./font-family.png)

This font family contains [8 styles](#-gallery).

- `IosevkaCharonMono_300Light`
- `IosevkaCharonMono_300Light_Italic`
- `IosevkaCharonMono_400Regular`
- `IosevkaCharonMono_400Regular_Italic`
- `IosevkaCharonMono_500Medium`
- `IosevkaCharonMono_500Medium_Italic`
- `IosevkaCharonMono_700Bold`
- `IosevkaCharonMono_700Bold_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/iosevka-charon-mono expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/iosevka-charon-mono/useFonts';
import { IosevkaCharonMono_300Light } from '@expo-google-fonts/iosevka-charon-mono/300Light';
import { IosevkaCharonMono_300Light_Italic } from '@expo-google-fonts/iosevka-charon-mono/300Light_Italic';
import { IosevkaCharonMono_400Regular } from '@expo-google-fonts/iosevka-charon-mono/400Regular';
import { IosevkaCharonMono_400Regular_Italic } from '@expo-google-fonts/iosevka-charon-mono/400Regular_Italic';
import { IosevkaCharonMono_500Medium } from '@expo-google-fonts/iosevka-charon-mono/500Medium';
import { IosevkaCharonMono_500Medium_Italic } from '@expo-google-fonts/iosevka-charon-mono/500Medium_Italic';
import { IosevkaCharonMono_700Bold } from '@expo-google-fonts/iosevka-charon-mono/700Bold';
import { IosevkaCharonMono_700Bold_Italic } from '@expo-google-fonts/iosevka-charon-mono/700Bold_Italic';

export default () => {

  let [fontsLoaded] = useFonts({
    IosevkaCharonMono_300Light, 
    IosevkaCharonMono_300Light_Italic, 
    IosevkaCharonMono_400Regular, 
    IosevkaCharonMono_400Regular_Italic, 
    IosevkaCharonMono_500Medium, 
    IosevkaCharonMono_500Medium_Italic, 
    IosevkaCharonMono_700Bold, 
    IosevkaCharonMono_700Bold_Italic
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
          fontFamily: "IosevkaCharonMono_300Light"
        }}>
          Iosevka Charon Mono Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "IosevkaCharonMono_300Light_Italic"
        }}>
          Iosevka Charon Mono Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "IosevkaCharonMono_400Regular"
        }}>
          Iosevka Charon Mono Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "IosevkaCharonMono_400Regular_Italic"
        }}>
          Iosevka Charon Mono Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "IosevkaCharonMono_500Medium"
        }}>
          Iosevka Charon Mono Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "IosevkaCharonMono_500Medium_Italic"
        }}>
          Iosevka Charon Mono Medium Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "IosevkaCharonMono_700Bold"
        }}>
          Iosevka Charon Mono Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "IosevkaCharonMono_700Bold_Italic"
        }}>
          Iosevka Charon Mono Bold Italic
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![IosevkaCharonMono_300Light](./300Light/IosevkaCharonMono_300Light.ttf.png)|![IosevkaCharonMono_300Light_Italic](./300Light_Italic/IosevkaCharonMono_300Light_Italic.ttf.png)|![IosevkaCharonMono_400Regular](./400Regular/IosevkaCharonMono_400Regular.ttf.png)||
|![IosevkaCharonMono_400Regular_Italic](./400Regular_Italic/IosevkaCharonMono_400Regular_Italic.ttf.png)|![IosevkaCharonMono_500Medium](./500Medium/IosevkaCharonMono_500Medium.ttf.png)|![IosevkaCharonMono_500Medium_Italic](./500Medium_Italic/IosevkaCharonMono_500Medium_Italic.ttf.png)||
|![IosevkaCharonMono_700Bold](./700Bold/IosevkaCharonMono_700Bold.ttf.png)|![IosevkaCharonMono_700Bold_Italic](./700Bold_Italic/IosevkaCharonMono_700Bold_Italic.ttf.png)|||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/iosevka-charon-mono` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Iosevka Charon Mono page on Google Fonts](https://fonts.google.com/specimen/Iosevka+Charon+Mono) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Iosevka Charon Mono on Google Fonts](https://fonts.google.com/specimen/Iosevka+Charon+Mono)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/iosevka-charon-mono)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/iosevka-charon-mono)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
