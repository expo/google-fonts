# @expo-google-fonts/raleway

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/raleway)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/raleway)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/raleway)

This package lets you use the [**Raleway**](https://fonts.google.com/specimen/Raleway) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Raleway

![Raleway](./font-family.png)

This font family contains [18 styles](#-gallery).

- `Raleway_100Thin`
- `Raleway_200ExtraLight`
- `Raleway_300Light`
- `Raleway_400Regular`
- `Raleway_500Medium`
- `Raleway_600SemiBold`
- `Raleway_700Bold`
- `Raleway_800ExtraBold`
- `Raleway_900Black`
- `Raleway_100Thin_Italic`
- `Raleway_200ExtraLight_Italic`
- `Raleway_300Light_Italic`
- `Raleway_400Regular_Italic`
- `Raleway_500Medium_Italic`
- `Raleway_600SemiBold_Italic`
- `Raleway_700Bold_Italic`
- `Raleway_800ExtraBold_Italic`
- `Raleway_900Black_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/raleway expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/raleway/useFonts';
import { Raleway_100Thin } from '@expo-google-fonts/raleway/100Thin';
import { Raleway_200ExtraLight } from '@expo-google-fonts/raleway/200ExtraLight';
import { Raleway_300Light } from '@expo-google-fonts/raleway/300Light';
import { Raleway_400Regular } from '@expo-google-fonts/raleway/400Regular';
import { Raleway_500Medium } from '@expo-google-fonts/raleway/500Medium';
import { Raleway_600SemiBold } from '@expo-google-fonts/raleway/600SemiBold';
import { Raleway_700Bold } from '@expo-google-fonts/raleway/700Bold';
import { Raleway_800ExtraBold } from '@expo-google-fonts/raleway/800ExtraBold';
import { Raleway_900Black } from '@expo-google-fonts/raleway/900Black';
import { Raleway_100Thin_Italic } from '@expo-google-fonts/raleway/100Thin_Italic';
import { Raleway_200ExtraLight_Italic } from '@expo-google-fonts/raleway/200ExtraLight_Italic';
import { Raleway_300Light_Italic } from '@expo-google-fonts/raleway/300Light_Italic';
import { Raleway_400Regular_Italic } from '@expo-google-fonts/raleway/400Regular_Italic';
import { Raleway_500Medium_Italic } from '@expo-google-fonts/raleway/500Medium_Italic';
import { Raleway_600SemiBold_Italic } from '@expo-google-fonts/raleway/600SemiBold_Italic';
import { Raleway_700Bold_Italic } from '@expo-google-fonts/raleway/700Bold_Italic';
import { Raleway_800ExtraBold_Italic } from '@expo-google-fonts/raleway/800ExtraBold_Italic';
import { Raleway_900Black_Italic } from '@expo-google-fonts/raleway/900Black_Italic';

export default () => {

  let [fontsLoaded] = useFonts({
    Raleway_100Thin, 
    Raleway_200ExtraLight, 
    Raleway_300Light, 
    Raleway_400Regular, 
    Raleway_500Medium, 
    Raleway_600SemiBold, 
    Raleway_700Bold, 
    Raleway_800ExtraBold, 
    Raleway_900Black, 
    Raleway_100Thin_Italic, 
    Raleway_200ExtraLight_Italic, 
    Raleway_300Light_Italic, 
    Raleway_400Regular_Italic, 
    Raleway_500Medium_Italic, 
    Raleway_600SemiBold_Italic, 
    Raleway_700Bold_Italic, 
    Raleway_800ExtraBold_Italic, 
    Raleway_900Black_Italic
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
          fontFamily: "Raleway_100Thin"
        }}>
          Raleway Thin
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Raleway_200ExtraLight"
        }}>
          Raleway Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Raleway_300Light"
        }}>
          Raleway Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Raleway_400Regular"
        }}>
          Raleway Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Raleway_500Medium"
        }}>
          Raleway Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Raleway_600SemiBold"
        }}>
          Raleway Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Raleway_700Bold"
        }}>
          Raleway Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Raleway_800ExtraBold"
        }}>
          Raleway Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Raleway_900Black"
        }}>
          Raleway Black
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Raleway_100Thin_Italic"
        }}>
          Raleway Thin Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Raleway_200ExtraLight_Italic"
        }}>
          Raleway Extra Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Raleway_300Light_Italic"
        }}>
          Raleway Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Raleway_400Regular_Italic"
        }}>
          Raleway Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Raleway_500Medium_Italic"
        }}>
          Raleway Medium Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Raleway_600SemiBold_Italic"
        }}>
          Raleway Semi Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Raleway_700Bold_Italic"
        }}>
          Raleway Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Raleway_800ExtraBold_Italic"
        }}>
          Raleway Extra Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Raleway_900Black_Italic"
        }}>
          Raleway Black Italic
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![Raleway_100Thin](./100Thin/Raleway_100Thin.ttf.png)|![Raleway_200ExtraLight](./200ExtraLight/Raleway_200ExtraLight.ttf.png)|![Raleway_300Light](./300Light/Raleway_300Light.ttf.png)||
|![Raleway_400Regular](./400Regular/Raleway_400Regular.ttf.png)|![Raleway_500Medium](./500Medium/Raleway_500Medium.ttf.png)|![Raleway_600SemiBold](./600SemiBold/Raleway_600SemiBold.ttf.png)||
|![Raleway_700Bold](./700Bold/Raleway_700Bold.ttf.png)|![Raleway_800ExtraBold](./800ExtraBold/Raleway_800ExtraBold.ttf.png)|![Raleway_900Black](./900Black/Raleway_900Black.ttf.png)||
|![Raleway_100Thin_Italic](./100Thin_Italic/Raleway_100Thin_Italic.ttf.png)|![Raleway_200ExtraLight_Italic](./200ExtraLight_Italic/Raleway_200ExtraLight_Italic.ttf.png)|![Raleway_300Light_Italic](./300Light_Italic/Raleway_300Light_Italic.ttf.png)||
|![Raleway_400Regular_Italic](./400Regular_Italic/Raleway_400Regular_Italic.ttf.png)|![Raleway_500Medium_Italic](./500Medium_Italic/Raleway_500Medium_Italic.ttf.png)|![Raleway_600SemiBold_Italic](./600SemiBold_Italic/Raleway_600SemiBold_Italic.ttf.png)||
|![Raleway_700Bold_Italic](./700Bold_Italic/Raleway_700Bold_Italic.ttf.png)|![Raleway_800ExtraBold_Italic](./800ExtraBold_Italic/Raleway_800ExtraBold_Italic.ttf.png)|![Raleway_900Black_Italic](./900Black_Italic/Raleway_900Black_Italic.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/raleway` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Raleway page on Google Fonts](https://fonts.google.com/specimen/Raleway) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Raleway on Google Fonts](https://fonts.google.com/specimen/Raleway)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/raleway)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/raleway)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
