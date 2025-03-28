# @expo-google-fonts/overpass

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/overpass)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/overpass)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/overpass)

This package lets you use the [**Overpass**](https://fonts.google.com/specimen/Overpass) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Overpass

![Overpass](./font-family.png)

This font family contains [18 styles](#-gallery).

- `Overpass_100Thin`
- `Overpass_200ExtraLight`
- `Overpass_300Light`
- `Overpass_400Regular`
- `Overpass_500Medium`
- `Overpass_600SemiBold`
- `Overpass_700Bold`
- `Overpass_800ExtraBold`
- `Overpass_900Black`
- `Overpass_100Thin_Italic`
- `Overpass_200ExtraLight_Italic`
- `Overpass_300Light_Italic`
- `Overpass_400Regular_Italic`
- `Overpass_500Medium_Italic`
- `Overpass_600SemiBold_Italic`
- `Overpass_700Bold_Italic`
- `Overpass_800ExtraBold_Italic`
- `Overpass_900Black_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/overpass expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/overpass/useFonts';
import { Overpass_100Thin } from '@expo-google-fonts/overpass/100Thin';
import { Overpass_200ExtraLight } from '@expo-google-fonts/overpass/200ExtraLight';
import { Overpass_300Light } from '@expo-google-fonts/overpass/300Light';
import { Overpass_400Regular } from '@expo-google-fonts/overpass/400Regular';
import { Overpass_500Medium } from '@expo-google-fonts/overpass/500Medium';
import { Overpass_600SemiBold } from '@expo-google-fonts/overpass/600SemiBold';
import { Overpass_700Bold } from '@expo-google-fonts/overpass/700Bold';
import { Overpass_800ExtraBold } from '@expo-google-fonts/overpass/800ExtraBold';
import { Overpass_900Black } from '@expo-google-fonts/overpass/900Black';
import { Overpass_100Thin_Italic } from '@expo-google-fonts/overpass/100Thin_Italic';
import { Overpass_200ExtraLight_Italic } from '@expo-google-fonts/overpass/200ExtraLight_Italic';
import { Overpass_300Light_Italic } from '@expo-google-fonts/overpass/300Light_Italic';
import { Overpass_400Regular_Italic } from '@expo-google-fonts/overpass/400Regular_Italic';
import { Overpass_500Medium_Italic } from '@expo-google-fonts/overpass/500Medium_Italic';
import { Overpass_600SemiBold_Italic } from '@expo-google-fonts/overpass/600SemiBold_Italic';
import { Overpass_700Bold_Italic } from '@expo-google-fonts/overpass/700Bold_Italic';
import { Overpass_800ExtraBold_Italic } from '@expo-google-fonts/overpass/800ExtraBold_Italic';
import { Overpass_900Black_Italic } from '@expo-google-fonts/overpass/900Black_Italic';

export default () => {

  let [fontsLoaded] = useFonts({
    Overpass_100Thin, 
    Overpass_200ExtraLight, 
    Overpass_300Light, 
    Overpass_400Regular, 
    Overpass_500Medium, 
    Overpass_600SemiBold, 
    Overpass_700Bold, 
    Overpass_800ExtraBold, 
    Overpass_900Black, 
    Overpass_100Thin_Italic, 
    Overpass_200ExtraLight_Italic, 
    Overpass_300Light_Italic, 
    Overpass_400Regular_Italic, 
    Overpass_500Medium_Italic, 
    Overpass_600SemiBold_Italic, 
    Overpass_700Bold_Italic, 
    Overpass_800ExtraBold_Italic, 
    Overpass_900Black_Italic
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
          fontFamily: "Overpass_100Thin"
        }}>
          Overpass Thin
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Overpass_200ExtraLight"
        }}>
          Overpass Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Overpass_300Light"
        }}>
          Overpass Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Overpass_400Regular"
        }}>
          Overpass Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Overpass_500Medium"
        }}>
          Overpass Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Overpass_600SemiBold"
        }}>
          Overpass Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Overpass_700Bold"
        }}>
          Overpass Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Overpass_800ExtraBold"
        }}>
          Overpass Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Overpass_900Black"
        }}>
          Overpass Black
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Overpass_100Thin_Italic"
        }}>
          Overpass Thin Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Overpass_200ExtraLight_Italic"
        }}>
          Overpass Extra Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Overpass_300Light_Italic"
        }}>
          Overpass Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Overpass_400Regular_Italic"
        }}>
          Overpass Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Overpass_500Medium_Italic"
        }}>
          Overpass Medium Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Overpass_600SemiBold_Italic"
        }}>
          Overpass Semi Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Overpass_700Bold_Italic"
        }}>
          Overpass Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Overpass_800ExtraBold_Italic"
        }}>
          Overpass Extra Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Overpass_900Black_Italic"
        }}>
          Overpass Black Italic
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![Overpass_100Thin](./100Thin/Overpass_100Thin.ttf.png)|![Overpass_200ExtraLight](./200ExtraLight/Overpass_200ExtraLight.ttf.png)|![Overpass_300Light](./300Light/Overpass_300Light.ttf.png)||
|![Overpass_400Regular](./400Regular/Overpass_400Regular.ttf.png)|![Overpass_500Medium](./500Medium/Overpass_500Medium.ttf.png)|![Overpass_600SemiBold](./600SemiBold/Overpass_600SemiBold.ttf.png)||
|![Overpass_700Bold](./700Bold/Overpass_700Bold.ttf.png)|![Overpass_800ExtraBold](./800ExtraBold/Overpass_800ExtraBold.ttf.png)|![Overpass_900Black](./900Black/Overpass_900Black.ttf.png)||
|![Overpass_100Thin_Italic](./100Thin_Italic/Overpass_100Thin_Italic.ttf.png)|![Overpass_200ExtraLight_Italic](./200ExtraLight_Italic/Overpass_200ExtraLight_Italic.ttf.png)|![Overpass_300Light_Italic](./300Light_Italic/Overpass_300Light_Italic.ttf.png)||
|![Overpass_400Regular_Italic](./400Regular_Italic/Overpass_400Regular_Italic.ttf.png)|![Overpass_500Medium_Italic](./500Medium_Italic/Overpass_500Medium_Italic.ttf.png)|![Overpass_600SemiBold_Italic](./600SemiBold_Italic/Overpass_600SemiBold_Italic.ttf.png)||
|![Overpass_700Bold_Italic](./700Bold_Italic/Overpass_700Bold_Italic.ttf.png)|![Overpass_800ExtraBold_Italic](./800ExtraBold_Italic/Overpass_800ExtraBold_Italic.ttf.png)|![Overpass_900Black_Italic](./900Black_Italic/Overpass_900Black_Italic.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/overpass` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Overpass page on Google Fonts](https://fonts.google.com/specimen/Overpass) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Overpass on Google Fonts](https://fonts.google.com/specimen/Overpass)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/overpass)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/overpass)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
