# @expo-google-fonts/zain

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/zain)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/zain)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/zain)

This package lets you use the [**Zain**](https://fonts.google.com/specimen/Zain) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Zain

![Zain](./font-family.png)

This font family contains [8 styles](#-gallery).

- `Zain_200ExtraLight`
- `Zain_300Light`
- `Zain_300Light_Italic`
- `Zain_400Regular`
- `Zain_400Regular_Italic`
- `Zain_700Bold`
- `Zain_800ExtraBold`
- `Zain_900Black`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/zain expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/zain/useFonts';
import { Zain_200ExtraLight } from '@expo-google-fonts/zain/200ExtraLight';
import { Zain_300Light } from '@expo-google-fonts/zain/300Light';
import { Zain_300Light_Italic } from '@expo-google-fonts/zain/300Light_Italic';
import { Zain_400Regular } from '@expo-google-fonts/zain/400Regular';
import { Zain_400Regular_Italic } from '@expo-google-fonts/zain/400Regular_Italic';
import { Zain_700Bold } from '@expo-google-fonts/zain/700Bold';
import { Zain_800ExtraBold } from '@expo-google-fonts/zain/800ExtraBold';
import { Zain_900Black } from '@expo-google-fonts/zain/900Black';

export default () => {

  let [fontsLoaded] = useFonts({
    Zain_200ExtraLight, 
    Zain_300Light, 
    Zain_300Light_Italic, 
    Zain_400Regular, 
    Zain_400Regular_Italic, 
    Zain_700Bold, 
    Zain_800ExtraBold, 
    Zain_900Black
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
          fontFamily: "Zain_200ExtraLight"
        }}>
          Zain Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Zain_300Light"
        }}>
          Zain Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Zain_300Light_Italic"
        }}>
          Zain Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Zain_400Regular"
        }}>
          Zain Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Zain_400Regular_Italic"
        }}>
          Zain Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Zain_700Bold"
        }}>
          Zain Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Zain_800ExtraBold"
        }}>
          Zain Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Zain_900Black"
        }}>
          Zain Black
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![Zain_200ExtraLight](./200ExtraLight/Zain_200ExtraLight.ttf.png)|![Zain_300Light](./300Light/Zain_300Light.ttf.png)|![Zain_300Light_Italic](./300Light_Italic/Zain_300Light_Italic.ttf.png)||
|![Zain_400Regular](./400Regular/Zain_400Regular.ttf.png)|![Zain_400Regular_Italic](./400Regular_Italic/Zain_400Regular_Italic.ttf.png)|![Zain_700Bold](./700Bold/Zain_700Bold.ttf.png)||
|![Zain_800ExtraBold](./800ExtraBold/Zain_800ExtraBold.ttf.png)|![Zain_900Black](./900Black/Zain_900Black.ttf.png)|||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/zain` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Zain page on Google Fonts](https://fonts.google.com/specimen/Zain) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Zain on Google Fonts](https://fonts.google.com/specimen/Zain)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/zain)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/zain)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
