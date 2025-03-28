# @expo-google-fonts/kanit

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/kanit)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/kanit)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/kanit)

This package lets you use the [**Kanit**](https://fonts.google.com/specimen/Kanit) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Kanit

![Kanit](./font-family.png)

This font family contains [18 styles](#-gallery).

- `Kanit_100Thin`
- `Kanit_100Thin_Italic`
- `Kanit_200ExtraLight`
- `Kanit_200ExtraLight_Italic`
- `Kanit_300Light`
- `Kanit_300Light_Italic`
- `Kanit_400Regular`
- `Kanit_400Regular_Italic`
- `Kanit_500Medium`
- `Kanit_500Medium_Italic`
- `Kanit_600SemiBold`
- `Kanit_600SemiBold_Italic`
- `Kanit_700Bold`
- `Kanit_700Bold_Italic`
- `Kanit_800ExtraBold`
- `Kanit_800ExtraBold_Italic`
- `Kanit_900Black`
- `Kanit_900Black_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/kanit expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/kanit/useFonts';
import { Kanit_100Thin } from '@expo-google-fonts/kanit/100Thin';
import { Kanit_100Thin_Italic } from '@expo-google-fonts/kanit/100Thin_Italic';
import { Kanit_200ExtraLight } from '@expo-google-fonts/kanit/200ExtraLight';
import { Kanit_200ExtraLight_Italic } from '@expo-google-fonts/kanit/200ExtraLight_Italic';
import { Kanit_300Light } from '@expo-google-fonts/kanit/300Light';
import { Kanit_300Light_Italic } from '@expo-google-fonts/kanit/300Light_Italic';
import { Kanit_400Regular } from '@expo-google-fonts/kanit/400Regular';
import { Kanit_400Regular_Italic } from '@expo-google-fonts/kanit/400Regular_Italic';
import { Kanit_500Medium } from '@expo-google-fonts/kanit/500Medium';
import { Kanit_500Medium_Italic } from '@expo-google-fonts/kanit/500Medium_Italic';
import { Kanit_600SemiBold } from '@expo-google-fonts/kanit/600SemiBold';
import { Kanit_600SemiBold_Italic } from '@expo-google-fonts/kanit/600SemiBold_Italic';
import { Kanit_700Bold } from '@expo-google-fonts/kanit/700Bold';
import { Kanit_700Bold_Italic } from '@expo-google-fonts/kanit/700Bold_Italic';
import { Kanit_800ExtraBold } from '@expo-google-fonts/kanit/800ExtraBold';
import { Kanit_800ExtraBold_Italic } from '@expo-google-fonts/kanit/800ExtraBold_Italic';
import { Kanit_900Black } from '@expo-google-fonts/kanit/900Black';
import { Kanit_900Black_Italic } from '@expo-google-fonts/kanit/900Black_Italic';

export default () => {

  let [fontsLoaded] = useFonts({
    Kanit_100Thin, 
    Kanit_100Thin_Italic, 
    Kanit_200ExtraLight, 
    Kanit_200ExtraLight_Italic, 
    Kanit_300Light, 
    Kanit_300Light_Italic, 
    Kanit_400Regular, 
    Kanit_400Regular_Italic, 
    Kanit_500Medium, 
    Kanit_500Medium_Italic, 
    Kanit_600SemiBold, 
    Kanit_600SemiBold_Italic, 
    Kanit_700Bold, 
    Kanit_700Bold_Italic, 
    Kanit_800ExtraBold, 
    Kanit_800ExtraBold_Italic, 
    Kanit_900Black, 
    Kanit_900Black_Italic
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
          fontFamily: "Kanit_100Thin"
        }}>
          Kanit Thin
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Kanit_100Thin_Italic"
        }}>
          Kanit Thin Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Kanit_200ExtraLight"
        }}>
          Kanit Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Kanit_200ExtraLight_Italic"
        }}>
          Kanit Extra Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Kanit_300Light"
        }}>
          Kanit Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Kanit_300Light_Italic"
        }}>
          Kanit Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Kanit_400Regular"
        }}>
          Kanit Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Kanit_400Regular_Italic"
        }}>
          Kanit Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Kanit_500Medium"
        }}>
          Kanit Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Kanit_500Medium_Italic"
        }}>
          Kanit Medium Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Kanit_600SemiBold"
        }}>
          Kanit Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Kanit_600SemiBold_Italic"
        }}>
          Kanit Semi Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Kanit_700Bold"
        }}>
          Kanit Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Kanit_700Bold_Italic"
        }}>
          Kanit Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Kanit_800ExtraBold"
        }}>
          Kanit Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Kanit_800ExtraBold_Italic"
        }}>
          Kanit Extra Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Kanit_900Black"
        }}>
          Kanit Black
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Kanit_900Black_Italic"
        }}>
          Kanit Black Italic
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![Kanit_100Thin](./100Thin/Kanit_100Thin.ttf.png)|![Kanit_100Thin_Italic](./100Thin_Italic/Kanit_100Thin_Italic.ttf.png)|![Kanit_200ExtraLight](./200ExtraLight/Kanit_200ExtraLight.ttf.png)||
|![Kanit_200ExtraLight_Italic](./200ExtraLight_Italic/Kanit_200ExtraLight_Italic.ttf.png)|![Kanit_300Light](./300Light/Kanit_300Light.ttf.png)|![Kanit_300Light_Italic](./300Light_Italic/Kanit_300Light_Italic.ttf.png)||
|![Kanit_400Regular](./400Regular/Kanit_400Regular.ttf.png)|![Kanit_400Regular_Italic](./400Regular_Italic/Kanit_400Regular_Italic.ttf.png)|![Kanit_500Medium](./500Medium/Kanit_500Medium.ttf.png)||
|![Kanit_500Medium_Italic](./500Medium_Italic/Kanit_500Medium_Italic.ttf.png)|![Kanit_600SemiBold](./600SemiBold/Kanit_600SemiBold.ttf.png)|![Kanit_600SemiBold_Italic](./600SemiBold_Italic/Kanit_600SemiBold_Italic.ttf.png)||
|![Kanit_700Bold](./700Bold/Kanit_700Bold.ttf.png)|![Kanit_700Bold_Italic](./700Bold_Italic/Kanit_700Bold_Italic.ttf.png)|![Kanit_800ExtraBold](./800ExtraBold/Kanit_800ExtraBold.ttf.png)||
|![Kanit_800ExtraBold_Italic](./800ExtraBold_Italic/Kanit_800ExtraBold_Italic.ttf.png)|![Kanit_900Black](./900Black/Kanit_900Black.ttf.png)|![Kanit_900Black_Italic](./900Black_Italic/Kanit_900Black_Italic.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/kanit` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Kanit page on Google Fonts](https://fonts.google.com/specimen/Kanit) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Kanit on Google Fonts](https://fonts.google.com/specimen/Kanit)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/kanit)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/kanit)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
