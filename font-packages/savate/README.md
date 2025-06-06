# @expo-google-fonts/savate

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/savate)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/savate)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/savate)

This package lets you use the [**Savate**](https://fonts.google.com/specimen/Savate) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Savate

![Savate](./font-family.png)

This font family contains [16 styles](#-gallery).

- `Savate_200ExtraLight`
- `Savate_300Light`
- `Savate_400Regular`
- `Savate_500Medium`
- `Savate_600SemiBold`
- `Savate_700Bold`
- `Savate_800ExtraBold`
- `Savate_900Black`
- `Savate_200ExtraLight_Italic`
- `Savate_300Light_Italic`
- `Savate_400Regular_Italic`
- `Savate_500Medium_Italic`
- `Savate_600SemiBold_Italic`
- `Savate_700Bold_Italic`
- `Savate_800ExtraBold_Italic`
- `Savate_900Black_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/savate expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/savate/useFonts';
import { Savate_200ExtraLight } from '@expo-google-fonts/savate/200ExtraLight';
import { Savate_300Light } from '@expo-google-fonts/savate/300Light';
import { Savate_400Regular } from '@expo-google-fonts/savate/400Regular';
import { Savate_500Medium } from '@expo-google-fonts/savate/500Medium';
import { Savate_600SemiBold } from '@expo-google-fonts/savate/600SemiBold';
import { Savate_700Bold } from '@expo-google-fonts/savate/700Bold';
import { Savate_800ExtraBold } from '@expo-google-fonts/savate/800ExtraBold';
import { Savate_900Black } from '@expo-google-fonts/savate/900Black';
import { Savate_200ExtraLight_Italic } from '@expo-google-fonts/savate/200ExtraLight_Italic';
import { Savate_300Light_Italic } from '@expo-google-fonts/savate/300Light_Italic';
import { Savate_400Regular_Italic } from '@expo-google-fonts/savate/400Regular_Italic';
import { Savate_500Medium_Italic } from '@expo-google-fonts/savate/500Medium_Italic';
import { Savate_600SemiBold_Italic } from '@expo-google-fonts/savate/600SemiBold_Italic';
import { Savate_700Bold_Italic } from '@expo-google-fonts/savate/700Bold_Italic';
import { Savate_800ExtraBold_Italic } from '@expo-google-fonts/savate/800ExtraBold_Italic';
import { Savate_900Black_Italic } from '@expo-google-fonts/savate/900Black_Italic';

export default () => {

  let [fontsLoaded] = useFonts({
    Savate_200ExtraLight, 
    Savate_300Light, 
    Savate_400Regular, 
    Savate_500Medium, 
    Savate_600SemiBold, 
    Savate_700Bold, 
    Savate_800ExtraBold, 
    Savate_900Black, 
    Savate_200ExtraLight_Italic, 
    Savate_300Light_Italic, 
    Savate_400Regular_Italic, 
    Savate_500Medium_Italic, 
    Savate_600SemiBold_Italic, 
    Savate_700Bold_Italic, 
    Savate_800ExtraBold_Italic, 
    Savate_900Black_Italic
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
          fontFamily: "Savate_200ExtraLight"
        }}>
          Savate Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Savate_300Light"
        }}>
          Savate Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Savate_400Regular"
        }}>
          Savate Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Savate_500Medium"
        }}>
          Savate Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Savate_600SemiBold"
        }}>
          Savate Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Savate_700Bold"
        }}>
          Savate Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Savate_800ExtraBold"
        }}>
          Savate Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Savate_900Black"
        }}>
          Savate Black
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Savate_200ExtraLight_Italic"
        }}>
          Savate Extra Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Savate_300Light_Italic"
        }}>
          Savate Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Savate_400Regular_Italic"
        }}>
          Savate Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Savate_500Medium_Italic"
        }}>
          Savate Medium Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Savate_600SemiBold_Italic"
        }}>
          Savate Semi Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Savate_700Bold_Italic"
        }}>
          Savate Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Savate_800ExtraBold_Italic"
        }}>
          Savate Extra Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Savate_900Black_Italic"
        }}>
          Savate Black Italic
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![Savate_200ExtraLight](./200ExtraLight/Savate_200ExtraLight.ttf.png)|![Savate_300Light](./300Light/Savate_300Light.ttf.png)|![Savate_400Regular](./400Regular/Savate_400Regular.ttf.png)||
|![Savate_500Medium](./500Medium/Savate_500Medium.ttf.png)|![Savate_600SemiBold](./600SemiBold/Savate_600SemiBold.ttf.png)|![Savate_700Bold](./700Bold/Savate_700Bold.ttf.png)||
|![Savate_800ExtraBold](./800ExtraBold/Savate_800ExtraBold.ttf.png)|![Savate_900Black](./900Black/Savate_900Black.ttf.png)|![Savate_200ExtraLight_Italic](./200ExtraLight_Italic/Savate_200ExtraLight_Italic.ttf.png)||
|![Savate_300Light_Italic](./300Light_Italic/Savate_300Light_Italic.ttf.png)|![Savate_400Regular_Italic](./400Regular_Italic/Savate_400Regular_Italic.ttf.png)|![Savate_500Medium_Italic](./500Medium_Italic/Savate_500Medium_Italic.ttf.png)||
|![Savate_600SemiBold_Italic](./600SemiBold_Italic/Savate_600SemiBold_Italic.ttf.png)|![Savate_700Bold_Italic](./700Bold_Italic/Savate_700Bold_Italic.ttf.png)|![Savate_800ExtraBold_Italic](./800ExtraBold_Italic/Savate_800ExtraBold_Italic.ttf.png)||
|![Savate_900Black_Italic](./900Black_Italic/Savate_900Black_Italic.ttf.png)||||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/savate` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Savate page on Google Fonts](https://fonts.google.com/specimen/Savate) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Savate on Google Fonts](https://fonts.google.com/specimen/Savate)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/savate)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/savate)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
