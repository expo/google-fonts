# @expo-google-fonts/advent-pro

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/advent-pro)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/advent-pro)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/advent-pro)

This package lets you use the [**Advent Pro**](https://fonts.google.com/specimen/Advent+Pro) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Advent Pro

![Advent Pro](./font-family.png)

This font family contains [18 styles](#-gallery).

- `AdventPro_100Thin`
- `AdventPro_200ExtraLight`
- `AdventPro_300Light`
- `AdventPro_400Regular`
- `AdventPro_500Medium`
- `AdventPro_600SemiBold`
- `AdventPro_700Bold`
- `AdventPro_800ExtraBold`
- `AdventPro_900Black`
- `AdventPro_100Thin_Italic`
- `AdventPro_200ExtraLight_Italic`
- `AdventPro_300Light_Italic`
- `AdventPro_400Regular_Italic`
- `AdventPro_500Medium_Italic`
- `AdventPro_600SemiBold_Italic`
- `AdventPro_700Bold_Italic`
- `AdventPro_800ExtraBold_Italic`
- `AdventPro_900Black_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/advent-pro expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/advent-pro/useFonts';
import { AdventPro_100Thin } from '@expo-google-fonts/advent-pro/100Thin';
import { AdventPro_200ExtraLight } from '@expo-google-fonts/advent-pro/200ExtraLight';
import { AdventPro_300Light } from '@expo-google-fonts/advent-pro/300Light';
import { AdventPro_400Regular } from '@expo-google-fonts/advent-pro/400Regular';
import { AdventPro_500Medium } from '@expo-google-fonts/advent-pro/500Medium';
import { AdventPro_600SemiBold } from '@expo-google-fonts/advent-pro/600SemiBold';
import { AdventPro_700Bold } from '@expo-google-fonts/advent-pro/700Bold';
import { AdventPro_800ExtraBold } from '@expo-google-fonts/advent-pro/800ExtraBold';
import { AdventPro_900Black } from '@expo-google-fonts/advent-pro/900Black';
import { AdventPro_100Thin_Italic } from '@expo-google-fonts/advent-pro/100Thin_Italic';
import { AdventPro_200ExtraLight_Italic } from '@expo-google-fonts/advent-pro/200ExtraLight_Italic';
import { AdventPro_300Light_Italic } from '@expo-google-fonts/advent-pro/300Light_Italic';
import { AdventPro_400Regular_Italic } from '@expo-google-fonts/advent-pro/400Regular_Italic';
import { AdventPro_500Medium_Italic } from '@expo-google-fonts/advent-pro/500Medium_Italic';
import { AdventPro_600SemiBold_Italic } from '@expo-google-fonts/advent-pro/600SemiBold_Italic';
import { AdventPro_700Bold_Italic } from '@expo-google-fonts/advent-pro/700Bold_Italic';
import { AdventPro_800ExtraBold_Italic } from '@expo-google-fonts/advent-pro/800ExtraBold_Italic';
import { AdventPro_900Black_Italic } from '@expo-google-fonts/advent-pro/900Black_Italic';

export default () => {

  let [fontsLoaded] = useFonts({
    AdventPro_100Thin, 
    AdventPro_200ExtraLight, 
    AdventPro_300Light, 
    AdventPro_400Regular, 
    AdventPro_500Medium, 
    AdventPro_600SemiBold, 
    AdventPro_700Bold, 
    AdventPro_800ExtraBold, 
    AdventPro_900Black, 
    AdventPro_100Thin_Italic, 
    AdventPro_200ExtraLight_Italic, 
    AdventPro_300Light_Italic, 
    AdventPro_400Regular_Italic, 
    AdventPro_500Medium_Italic, 
    AdventPro_600SemiBold_Italic, 
    AdventPro_700Bold_Italic, 
    AdventPro_800ExtraBold_Italic, 
    AdventPro_900Black_Italic
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
          fontFamily: "AdventPro_100Thin"
        }}>
          Advent Pro Thin
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AdventPro_200ExtraLight"
        }}>
          Advent Pro Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AdventPro_300Light"
        }}>
          Advent Pro Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AdventPro_400Regular"
        }}>
          Advent Pro Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AdventPro_500Medium"
        }}>
          Advent Pro Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AdventPro_600SemiBold"
        }}>
          Advent Pro Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AdventPro_700Bold"
        }}>
          Advent Pro Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AdventPro_800ExtraBold"
        }}>
          Advent Pro Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AdventPro_900Black"
        }}>
          Advent Pro Black
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AdventPro_100Thin_Italic"
        }}>
          Advent Pro Thin Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AdventPro_200ExtraLight_Italic"
        }}>
          Advent Pro Extra Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AdventPro_300Light_Italic"
        }}>
          Advent Pro Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AdventPro_400Regular_Italic"
        }}>
          Advent Pro Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AdventPro_500Medium_Italic"
        }}>
          Advent Pro Medium Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AdventPro_600SemiBold_Italic"
        }}>
          Advent Pro Semi Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AdventPro_700Bold_Italic"
        }}>
          Advent Pro Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AdventPro_800ExtraBold_Italic"
        }}>
          Advent Pro Extra Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AdventPro_900Black_Italic"
        }}>
          Advent Pro Black Italic
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![AdventPro_100Thin](./100Thin/AdventPro_100Thin.ttf.png)|![AdventPro_200ExtraLight](./200ExtraLight/AdventPro_200ExtraLight.ttf.png)|![AdventPro_300Light](./300Light/AdventPro_300Light.ttf.png)||
|![AdventPro_400Regular](./400Regular/AdventPro_400Regular.ttf.png)|![AdventPro_500Medium](./500Medium/AdventPro_500Medium.ttf.png)|![AdventPro_600SemiBold](./600SemiBold/AdventPro_600SemiBold.ttf.png)||
|![AdventPro_700Bold](./700Bold/AdventPro_700Bold.ttf.png)|![AdventPro_800ExtraBold](./800ExtraBold/AdventPro_800ExtraBold.ttf.png)|![AdventPro_900Black](./900Black/AdventPro_900Black.ttf.png)||
|![AdventPro_100Thin_Italic](./100Thin_Italic/AdventPro_100Thin_Italic.ttf.png)|![AdventPro_200ExtraLight_Italic](./200ExtraLight_Italic/AdventPro_200ExtraLight_Italic.ttf.png)|![AdventPro_300Light_Italic](./300Light_Italic/AdventPro_300Light_Italic.ttf.png)||
|![AdventPro_400Regular_Italic](./400Regular_Italic/AdventPro_400Regular_Italic.ttf.png)|![AdventPro_500Medium_Italic](./500Medium_Italic/AdventPro_500Medium_Italic.ttf.png)|![AdventPro_600SemiBold_Italic](./600SemiBold_Italic/AdventPro_600SemiBold_Italic.ttf.png)||
|![AdventPro_700Bold_Italic](./700Bold_Italic/AdventPro_700Bold_Italic.ttf.png)|![AdventPro_800ExtraBold_Italic](./800ExtraBold_Italic/AdventPro_800ExtraBold_Italic.ttf.png)|![AdventPro_900Black_Italic](./900Black_Italic/AdventPro_900Black_Italic.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/advent-pro` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Advent Pro page on Google Fonts](https://fonts.google.com/specimen/Advent+Pro) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Advent Pro on Google Fonts](https://fonts.google.com/specimen/Advent+Pro)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/advent-pro)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/advent-pro)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
