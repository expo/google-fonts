# @expo-google-fonts/mukta-malar

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/mukta-malar)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/mukta-malar)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/mukta-malar)

This package lets you use the [**Mukta Malar**](https://fonts.google.com/specimen/Mukta+Malar) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Mukta Malar

![Mukta Malar](./font-family.png)

This font family contains [7 styles](#-gallery).

- `MuktaMalar_200ExtraLight`
- `MuktaMalar_300Light`
- `MuktaMalar_400Regular`
- `MuktaMalar_500Medium`
- `MuktaMalar_600SemiBold`
- `MuktaMalar_700Bold`
- `MuktaMalar_800ExtraBold`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/mukta-malar expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/mukta-malar/useFonts';
import { MuktaMalar_200ExtraLight } from '@expo-google-fonts/mukta-malar/200ExtraLight';
import { MuktaMalar_300Light } from '@expo-google-fonts/mukta-malar/300Light';
import { MuktaMalar_400Regular } from '@expo-google-fonts/mukta-malar/400Regular';
import { MuktaMalar_500Medium } from '@expo-google-fonts/mukta-malar/500Medium';
import { MuktaMalar_600SemiBold } from '@expo-google-fonts/mukta-malar/600SemiBold';
import { MuktaMalar_700Bold } from '@expo-google-fonts/mukta-malar/700Bold';
import { MuktaMalar_800ExtraBold } from '@expo-google-fonts/mukta-malar/800ExtraBold';

export default () => {

  let [fontsLoaded] = useFonts({
    MuktaMalar_200ExtraLight, 
    MuktaMalar_300Light, 
    MuktaMalar_400Regular, 
    MuktaMalar_500Medium, 
    MuktaMalar_600SemiBold, 
    MuktaMalar_700Bold, 
    MuktaMalar_800ExtraBold
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
          fontFamily: "MuktaMalar_200ExtraLight"
        }}>
          Mukta Malar Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "MuktaMalar_300Light"
        }}>
          Mukta Malar Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "MuktaMalar_400Regular"
        }}>
          Mukta Malar Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "MuktaMalar_500Medium"
        }}>
          Mukta Malar Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "MuktaMalar_600SemiBold"
        }}>
          Mukta Malar Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "MuktaMalar_700Bold"
        }}>
          Mukta Malar Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "MuktaMalar_800ExtraBold"
        }}>
          Mukta Malar Extra Bold
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![MuktaMalar_200ExtraLight](./200ExtraLight/MuktaMalar_200ExtraLight.ttf.png)|![MuktaMalar_300Light](./300Light/MuktaMalar_300Light.ttf.png)|![MuktaMalar_400Regular](./400Regular/MuktaMalar_400Regular.ttf.png)||
|![MuktaMalar_500Medium](./500Medium/MuktaMalar_500Medium.ttf.png)|![MuktaMalar_600SemiBold](./600SemiBold/MuktaMalar_600SemiBold.ttf.png)|![MuktaMalar_700Bold](./700Bold/MuktaMalar_700Bold.ttf.png)||
|![MuktaMalar_800ExtraBold](./800ExtraBold/MuktaMalar_800ExtraBold.ttf.png)||||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/mukta-malar` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Mukta Malar page on Google Fonts](https://fonts.google.com/specimen/Mukta+Malar) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Mukta Malar on Google Fonts](https://fonts.google.com/specimen/Mukta+Malar)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/mukta-malar)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/mukta-malar)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
