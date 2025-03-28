# @expo-google-fonts/k2d

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/k2d)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/k2d)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/k2d)

This package lets you use the [**K2D**](https://fonts.google.com/specimen/K2D) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## K2D

![K2D](./font-family.png)

This font family contains [16 styles](#-gallery).

- `K2D_100Thin`
- `K2D_100Thin_Italic`
- `K2D_200ExtraLight`
- `K2D_200ExtraLight_Italic`
- `K2D_300Light`
- `K2D_300Light_Italic`
- `K2D_400Regular`
- `K2D_400Regular_Italic`
- `K2D_500Medium`
- `K2D_500Medium_Italic`
- `K2D_600SemiBold`
- `K2D_600SemiBold_Italic`
- `K2D_700Bold`
- `K2D_700Bold_Italic`
- `K2D_800ExtraBold`
- `K2D_800ExtraBold_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/k2d expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/k2d/useFonts';
import { K2D_100Thin } from '@expo-google-fonts/k2d/100Thin';
import { K2D_100Thin_Italic } from '@expo-google-fonts/k2d/100Thin_Italic';
import { K2D_200ExtraLight } from '@expo-google-fonts/k2d/200ExtraLight';
import { K2D_200ExtraLight_Italic } from '@expo-google-fonts/k2d/200ExtraLight_Italic';
import { K2D_300Light } from '@expo-google-fonts/k2d/300Light';
import { K2D_300Light_Italic } from '@expo-google-fonts/k2d/300Light_Italic';
import { K2D_400Regular } from '@expo-google-fonts/k2d/400Regular';
import { K2D_400Regular_Italic } from '@expo-google-fonts/k2d/400Regular_Italic';
import { K2D_500Medium } from '@expo-google-fonts/k2d/500Medium';
import { K2D_500Medium_Italic } from '@expo-google-fonts/k2d/500Medium_Italic';
import { K2D_600SemiBold } from '@expo-google-fonts/k2d/600SemiBold';
import { K2D_600SemiBold_Italic } from '@expo-google-fonts/k2d/600SemiBold_Italic';
import { K2D_700Bold } from '@expo-google-fonts/k2d/700Bold';
import { K2D_700Bold_Italic } from '@expo-google-fonts/k2d/700Bold_Italic';
import { K2D_800ExtraBold } from '@expo-google-fonts/k2d/800ExtraBold';
import { K2D_800ExtraBold_Italic } from '@expo-google-fonts/k2d/800ExtraBold_Italic';

export default () => {

  let [fontsLoaded] = useFonts({
    K2D_100Thin, 
    K2D_100Thin_Italic, 
    K2D_200ExtraLight, 
    K2D_200ExtraLight_Italic, 
    K2D_300Light, 
    K2D_300Light_Italic, 
    K2D_400Regular, 
    K2D_400Regular_Italic, 
    K2D_500Medium, 
    K2D_500Medium_Italic, 
    K2D_600SemiBold, 
    K2D_600SemiBold_Italic, 
    K2D_700Bold, 
    K2D_700Bold_Italic, 
    K2D_800ExtraBold, 
    K2D_800ExtraBold_Italic
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
          fontFamily: "K2D_100Thin"
        }}>
          K2D Thin
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "K2D_100Thin_Italic"
        }}>
          K2D Thin Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "K2D_200ExtraLight"
        }}>
          K2D Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "K2D_200ExtraLight_Italic"
        }}>
          K2D Extra Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "K2D_300Light"
        }}>
          K2D Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "K2D_300Light_Italic"
        }}>
          K2D Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "K2D_400Regular"
        }}>
          K2D Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "K2D_400Regular_Italic"
        }}>
          K2D Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "K2D_500Medium"
        }}>
          K2D Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "K2D_500Medium_Italic"
        }}>
          K2D Medium Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "K2D_600SemiBold"
        }}>
          K2D Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "K2D_600SemiBold_Italic"
        }}>
          K2D Semi Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "K2D_700Bold"
        }}>
          K2D Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "K2D_700Bold_Italic"
        }}>
          K2D Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "K2D_800ExtraBold"
        }}>
          K2D Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "K2D_800ExtraBold_Italic"
        }}>
          K2D Extra Bold Italic
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![K2D_100Thin](./100Thin/K2D_100Thin.ttf.png)|![K2D_100Thin_Italic](./100Thin_Italic/K2D_100Thin_Italic.ttf.png)|![K2D_200ExtraLight](./200ExtraLight/K2D_200ExtraLight.ttf.png)||
|![K2D_200ExtraLight_Italic](./200ExtraLight_Italic/K2D_200ExtraLight_Italic.ttf.png)|![K2D_300Light](./300Light/K2D_300Light.ttf.png)|![K2D_300Light_Italic](./300Light_Italic/K2D_300Light_Italic.ttf.png)||
|![K2D_400Regular](./400Regular/K2D_400Regular.ttf.png)|![K2D_400Regular_Italic](./400Regular_Italic/K2D_400Regular_Italic.ttf.png)|![K2D_500Medium](./500Medium/K2D_500Medium.ttf.png)||
|![K2D_500Medium_Italic](./500Medium_Italic/K2D_500Medium_Italic.ttf.png)|![K2D_600SemiBold](./600SemiBold/K2D_600SemiBold.ttf.png)|![K2D_600SemiBold_Italic](./600SemiBold_Italic/K2D_600SemiBold_Italic.ttf.png)||
|![K2D_700Bold](./700Bold/K2D_700Bold.ttf.png)|![K2D_700Bold_Italic](./700Bold_Italic/K2D_700Bold_Italic.ttf.png)|![K2D_800ExtraBold](./800ExtraBold/K2D_800ExtraBold.ttf.png)||
|![K2D_800ExtraBold_Italic](./800ExtraBold_Italic/K2D_800ExtraBold_Italic.ttf.png)||||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/k2d` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [K2D page on Google Fonts](https://fonts.google.com/specimen/K2D) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [K2D on Google Fonts](https://fonts.google.com/specimen/K2D)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/k2d)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/k2d)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
