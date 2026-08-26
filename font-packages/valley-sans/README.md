# @expo-google-fonts/valley-sans

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/valley-sans)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/valley-sans)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/valley-sans)

This package lets you use the [**Valley Sans**](https://fonts.google.com/specimen/Valley+Sans) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Valley Sans

![Valley Sans](./font-family.png)

This font family contains [18 styles](#-gallery).

- `ValleySans_100Thin`
- `ValleySans_200ExtraLight`
- `ValleySans_300Light`
- `ValleySans_400Regular`
- `ValleySans_500Medium`
- `ValleySans_600SemiBold`
- `ValleySans_700Bold`
- `ValleySans_800ExtraBold`
- `ValleySans_900Black`
- `ValleySans_100Thin_Italic`
- `ValleySans_200ExtraLight_Italic`
- `ValleySans_300Light_Italic`
- `ValleySans_400Regular_Italic`
- `ValleySans_500Medium_Italic`
- `ValleySans_600SemiBold_Italic`
- `ValleySans_700Bold_Italic`
- `ValleySans_800ExtraBold_Italic`
- `ValleySans_900Black_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/valley-sans expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/valley-sans/useFonts';
import { ValleySans_100Thin } from '@expo-google-fonts/valley-sans/100Thin';
import { ValleySans_200ExtraLight } from '@expo-google-fonts/valley-sans/200ExtraLight';
import { ValleySans_300Light } from '@expo-google-fonts/valley-sans/300Light';
import { ValleySans_400Regular } from '@expo-google-fonts/valley-sans/400Regular';
import { ValleySans_500Medium } from '@expo-google-fonts/valley-sans/500Medium';
import { ValleySans_600SemiBold } from '@expo-google-fonts/valley-sans/600SemiBold';
import { ValleySans_700Bold } from '@expo-google-fonts/valley-sans/700Bold';
import { ValleySans_800ExtraBold } from '@expo-google-fonts/valley-sans/800ExtraBold';
import { ValleySans_900Black } from '@expo-google-fonts/valley-sans/900Black';
import { ValleySans_100Thin_Italic } from '@expo-google-fonts/valley-sans/100Thin_Italic';
import { ValleySans_200ExtraLight_Italic } from '@expo-google-fonts/valley-sans/200ExtraLight_Italic';
import { ValleySans_300Light_Italic } from '@expo-google-fonts/valley-sans/300Light_Italic';
import { ValleySans_400Regular_Italic } from '@expo-google-fonts/valley-sans/400Regular_Italic';
import { ValleySans_500Medium_Italic } from '@expo-google-fonts/valley-sans/500Medium_Italic';
import { ValleySans_600SemiBold_Italic } from '@expo-google-fonts/valley-sans/600SemiBold_Italic';
import { ValleySans_700Bold_Italic } from '@expo-google-fonts/valley-sans/700Bold_Italic';
import { ValleySans_800ExtraBold_Italic } from '@expo-google-fonts/valley-sans/800ExtraBold_Italic';
import { ValleySans_900Black_Italic } from '@expo-google-fonts/valley-sans/900Black_Italic';

export default () => {

  let [fontsLoaded] = useFonts({
    ValleySans_100Thin, 
    ValleySans_200ExtraLight, 
    ValleySans_300Light, 
    ValleySans_400Regular, 
    ValleySans_500Medium, 
    ValleySans_600SemiBold, 
    ValleySans_700Bold, 
    ValleySans_800ExtraBold, 
    ValleySans_900Black, 
    ValleySans_100Thin_Italic, 
    ValleySans_200ExtraLight_Italic, 
    ValleySans_300Light_Italic, 
    ValleySans_400Regular_Italic, 
    ValleySans_500Medium_Italic, 
    ValleySans_600SemiBold_Italic, 
    ValleySans_700Bold_Italic, 
    ValleySans_800ExtraBold_Italic, 
    ValleySans_900Black_Italic
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
          fontFamily: "ValleySans_100Thin"
        }}>
          Valley Sans Thin
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ValleySans_200ExtraLight"
        }}>
          Valley Sans Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ValleySans_300Light"
        }}>
          Valley Sans Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ValleySans_400Regular"
        }}>
          Valley Sans Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ValleySans_500Medium"
        }}>
          Valley Sans Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ValleySans_600SemiBold"
        }}>
          Valley Sans Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ValleySans_700Bold"
        }}>
          Valley Sans Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ValleySans_800ExtraBold"
        }}>
          Valley Sans Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ValleySans_900Black"
        }}>
          Valley Sans Black
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ValleySans_100Thin_Italic"
        }}>
          Valley Sans Thin Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ValleySans_200ExtraLight_Italic"
        }}>
          Valley Sans Extra Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ValleySans_300Light_Italic"
        }}>
          Valley Sans Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ValleySans_400Regular_Italic"
        }}>
          Valley Sans Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ValleySans_500Medium_Italic"
        }}>
          Valley Sans Medium Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ValleySans_600SemiBold_Italic"
        }}>
          Valley Sans Semi Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ValleySans_700Bold_Italic"
        }}>
          Valley Sans Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ValleySans_800ExtraBold_Italic"
        }}>
          Valley Sans Extra Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ValleySans_900Black_Italic"
        }}>
          Valley Sans Black Italic
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![ValleySans_100Thin](./100Thin/ValleySans_100Thin.ttf.png)|![ValleySans_200ExtraLight](./200ExtraLight/ValleySans_200ExtraLight.ttf.png)|![ValleySans_300Light](./300Light/ValleySans_300Light.ttf.png)||
|![ValleySans_400Regular](./400Regular/ValleySans_400Regular.ttf.png)|![ValleySans_500Medium](./500Medium/ValleySans_500Medium.ttf.png)|![ValleySans_600SemiBold](./600SemiBold/ValleySans_600SemiBold.ttf.png)||
|![ValleySans_700Bold](./700Bold/ValleySans_700Bold.ttf.png)|![ValleySans_800ExtraBold](./800ExtraBold/ValleySans_800ExtraBold.ttf.png)|![ValleySans_900Black](./900Black/ValleySans_900Black.ttf.png)||
|![ValleySans_100Thin_Italic](./100Thin_Italic/ValleySans_100Thin_Italic.ttf.png)|![ValleySans_200ExtraLight_Italic](./200ExtraLight_Italic/ValleySans_200ExtraLight_Italic.ttf.png)|![ValleySans_300Light_Italic](./300Light_Italic/ValleySans_300Light_Italic.ttf.png)||
|![ValleySans_400Regular_Italic](./400Regular_Italic/ValleySans_400Regular_Italic.ttf.png)|![ValleySans_500Medium_Italic](./500Medium_Italic/ValleySans_500Medium_Italic.ttf.png)|![ValleySans_600SemiBold_Italic](./600SemiBold_Italic/ValleySans_600SemiBold_Italic.ttf.png)||
|![ValleySans_700Bold_Italic](./700Bold_Italic/ValleySans_700Bold_Italic.ttf.png)|![ValleySans_800ExtraBold_Italic](./800ExtraBold_Italic/ValleySans_800ExtraBold_Italic.ttf.png)|![ValleySans_900Black_Italic](./900Black_Italic/ValleySans_900Black_Italic.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/valley-sans` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Valley Sans page on Google Fonts](https://fonts.google.com/specimen/Valley+Sans) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Valley Sans on Google Fonts](https://fonts.google.com/specimen/Valley+Sans)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/valley-sans)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/valley-sans)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
