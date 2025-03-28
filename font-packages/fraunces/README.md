# @expo-google-fonts/fraunces

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/fraunces)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/fraunces)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/fraunces)

This package lets you use the [**Fraunces**](https://fonts.google.com/specimen/Fraunces) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Fraunces

![Fraunces](./font-family.png)

This font family contains [18 styles](#-gallery).

- `Fraunces_100Thin`
- `Fraunces_200ExtraLight`
- `Fraunces_300Light`
- `Fraunces_400Regular`
- `Fraunces_500Medium`
- `Fraunces_600SemiBold`
- `Fraunces_700Bold`
- `Fraunces_800ExtraBold`
- `Fraunces_900Black`
- `Fraunces_100Thin_Italic`
- `Fraunces_200ExtraLight_Italic`
- `Fraunces_300Light_Italic`
- `Fraunces_400Regular_Italic`
- `Fraunces_500Medium_Italic`
- `Fraunces_600SemiBold_Italic`
- `Fraunces_700Bold_Italic`
- `Fraunces_800ExtraBold_Italic`
- `Fraunces_900Black_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/fraunces expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/fraunces/useFonts';
import { Fraunces_100Thin } from '@expo-google-fonts/fraunces/100Thin';
import { Fraunces_200ExtraLight } from '@expo-google-fonts/fraunces/200ExtraLight';
import { Fraunces_300Light } from '@expo-google-fonts/fraunces/300Light';
import { Fraunces_400Regular } from '@expo-google-fonts/fraunces/400Regular';
import { Fraunces_500Medium } from '@expo-google-fonts/fraunces/500Medium';
import { Fraunces_600SemiBold } from '@expo-google-fonts/fraunces/600SemiBold';
import { Fraunces_700Bold } from '@expo-google-fonts/fraunces/700Bold';
import { Fraunces_800ExtraBold } from '@expo-google-fonts/fraunces/800ExtraBold';
import { Fraunces_900Black } from '@expo-google-fonts/fraunces/900Black';
import { Fraunces_100Thin_Italic } from '@expo-google-fonts/fraunces/100Thin_Italic';
import { Fraunces_200ExtraLight_Italic } from '@expo-google-fonts/fraunces/200ExtraLight_Italic';
import { Fraunces_300Light_Italic } from '@expo-google-fonts/fraunces/300Light_Italic';
import { Fraunces_400Regular_Italic } from '@expo-google-fonts/fraunces/400Regular_Italic';
import { Fraunces_500Medium_Italic } from '@expo-google-fonts/fraunces/500Medium_Italic';
import { Fraunces_600SemiBold_Italic } from '@expo-google-fonts/fraunces/600SemiBold_Italic';
import { Fraunces_700Bold_Italic } from '@expo-google-fonts/fraunces/700Bold_Italic';
import { Fraunces_800ExtraBold_Italic } from '@expo-google-fonts/fraunces/800ExtraBold_Italic';
import { Fraunces_900Black_Italic } from '@expo-google-fonts/fraunces/900Black_Italic';

export default () => {

  let [fontsLoaded] = useFonts({
    Fraunces_100Thin, 
    Fraunces_200ExtraLight, 
    Fraunces_300Light, 
    Fraunces_400Regular, 
    Fraunces_500Medium, 
    Fraunces_600SemiBold, 
    Fraunces_700Bold, 
    Fraunces_800ExtraBold, 
    Fraunces_900Black, 
    Fraunces_100Thin_Italic, 
    Fraunces_200ExtraLight_Italic, 
    Fraunces_300Light_Italic, 
    Fraunces_400Regular_Italic, 
    Fraunces_500Medium_Italic, 
    Fraunces_600SemiBold_Italic, 
    Fraunces_700Bold_Italic, 
    Fraunces_800ExtraBold_Italic, 
    Fraunces_900Black_Italic
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
          fontFamily: "Fraunces_100Thin"
        }}>
          Fraunces Thin
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Fraunces_200ExtraLight"
        }}>
          Fraunces Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Fraunces_300Light"
        }}>
          Fraunces Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Fraunces_400Regular"
        }}>
          Fraunces Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Fraunces_500Medium"
        }}>
          Fraunces Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Fraunces_600SemiBold"
        }}>
          Fraunces Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Fraunces_700Bold"
        }}>
          Fraunces Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Fraunces_800ExtraBold"
        }}>
          Fraunces Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Fraunces_900Black"
        }}>
          Fraunces Black
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Fraunces_100Thin_Italic"
        }}>
          Fraunces Thin Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Fraunces_200ExtraLight_Italic"
        }}>
          Fraunces Extra Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Fraunces_300Light_Italic"
        }}>
          Fraunces Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Fraunces_400Regular_Italic"
        }}>
          Fraunces Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Fraunces_500Medium_Italic"
        }}>
          Fraunces Medium Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Fraunces_600SemiBold_Italic"
        }}>
          Fraunces Semi Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Fraunces_700Bold_Italic"
        }}>
          Fraunces Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Fraunces_800ExtraBold_Italic"
        }}>
          Fraunces Extra Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Fraunces_900Black_Italic"
        }}>
          Fraunces Black Italic
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![Fraunces_100Thin](./100Thin/Fraunces_100Thin.ttf.png)|![Fraunces_200ExtraLight](./200ExtraLight/Fraunces_200ExtraLight.ttf.png)|![Fraunces_300Light](./300Light/Fraunces_300Light.ttf.png)||
|![Fraunces_400Regular](./400Regular/Fraunces_400Regular.ttf.png)|![Fraunces_500Medium](./500Medium/Fraunces_500Medium.ttf.png)|![Fraunces_600SemiBold](./600SemiBold/Fraunces_600SemiBold.ttf.png)||
|![Fraunces_700Bold](./700Bold/Fraunces_700Bold.ttf.png)|![Fraunces_800ExtraBold](./800ExtraBold/Fraunces_800ExtraBold.ttf.png)|![Fraunces_900Black](./900Black/Fraunces_900Black.ttf.png)||
|![Fraunces_100Thin_Italic](./100Thin_Italic/Fraunces_100Thin_Italic.ttf.png)|![Fraunces_200ExtraLight_Italic](./200ExtraLight_Italic/Fraunces_200ExtraLight_Italic.ttf.png)|![Fraunces_300Light_Italic](./300Light_Italic/Fraunces_300Light_Italic.ttf.png)||
|![Fraunces_400Regular_Italic](./400Regular_Italic/Fraunces_400Regular_Italic.ttf.png)|![Fraunces_500Medium_Italic](./500Medium_Italic/Fraunces_500Medium_Italic.ttf.png)|![Fraunces_600SemiBold_Italic](./600SemiBold_Italic/Fraunces_600SemiBold_Italic.ttf.png)||
|![Fraunces_700Bold_Italic](./700Bold_Italic/Fraunces_700Bold_Italic.ttf.png)|![Fraunces_800ExtraBold_Italic](./800ExtraBold_Italic/Fraunces_800ExtraBold_Italic.ttf.png)|![Fraunces_900Black_Italic](./900Black_Italic/Fraunces_900Black_Italic.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/fraunces` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Fraunces page on Google Fonts](https://fonts.google.com/specimen/Fraunces) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Fraunces on Google Fonts](https://fonts.google.com/specimen/Fraunces)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/fraunces)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/fraunces)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
