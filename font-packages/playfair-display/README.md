# @expo-google-fonts/playfair-display

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/playfair-display)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/playfair-display)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/playfair-display)

This package lets you use the [**Playfair Display**](https://fonts.google.com/specimen/Playfair+Display) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Playfair Display

![Playfair Display](./font-family.png)

This font family contains [12 styles](#-gallery).

- `PlayfairDisplay_400Regular`
- `PlayfairDisplay_500Medium`
- `PlayfairDisplay_600SemiBold`
- `PlayfairDisplay_700Bold`
- `PlayfairDisplay_800ExtraBold`
- `PlayfairDisplay_900Black`
- `PlayfairDisplay_400Regular_Italic`
- `PlayfairDisplay_500Medium_Italic`
- `PlayfairDisplay_600SemiBold_Italic`
- `PlayfairDisplay_700Bold_Italic`
- `PlayfairDisplay_800ExtraBold_Italic`
- `PlayfairDisplay_900Black_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/playfair-display expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/playfair-display/useFonts';
import { PlayfairDisplay_400Regular } from '@expo-google-fonts/playfair-display/400Regular';
import { PlayfairDisplay_500Medium } from '@expo-google-fonts/playfair-display/500Medium';
import { PlayfairDisplay_600SemiBold } from '@expo-google-fonts/playfair-display/600SemiBold';
import { PlayfairDisplay_700Bold } from '@expo-google-fonts/playfair-display/700Bold';
import { PlayfairDisplay_800ExtraBold } from '@expo-google-fonts/playfair-display/800ExtraBold';
import { PlayfairDisplay_900Black } from '@expo-google-fonts/playfair-display/900Black';
import { PlayfairDisplay_400Regular_Italic } from '@expo-google-fonts/playfair-display/400Regular_Italic';
import { PlayfairDisplay_500Medium_Italic } from '@expo-google-fonts/playfair-display/500Medium_Italic';
import { PlayfairDisplay_600SemiBold_Italic } from '@expo-google-fonts/playfair-display/600SemiBold_Italic';
import { PlayfairDisplay_700Bold_Italic } from '@expo-google-fonts/playfair-display/700Bold_Italic';
import { PlayfairDisplay_800ExtraBold_Italic } from '@expo-google-fonts/playfair-display/800ExtraBold_Italic';
import { PlayfairDisplay_900Black_Italic } from '@expo-google-fonts/playfair-display/900Black_Italic';

export default () => {

  let [fontsLoaded] = useFonts({
    PlayfairDisplay_400Regular, 
    PlayfairDisplay_500Medium, 
    PlayfairDisplay_600SemiBold, 
    PlayfairDisplay_700Bold, 
    PlayfairDisplay_800ExtraBold, 
    PlayfairDisplay_900Black, 
    PlayfairDisplay_400Regular_Italic, 
    PlayfairDisplay_500Medium_Italic, 
    PlayfairDisplay_600SemiBold_Italic, 
    PlayfairDisplay_700Bold_Italic, 
    PlayfairDisplay_800ExtraBold_Italic, 
    PlayfairDisplay_900Black_Italic
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
          fontFamily: "PlayfairDisplay_400Regular"
        }}>
          Playfair Display Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "PlayfairDisplay_500Medium"
        }}>
          Playfair Display Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "PlayfairDisplay_600SemiBold"
        }}>
          Playfair Display Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "PlayfairDisplay_700Bold"
        }}>
          Playfair Display Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "PlayfairDisplay_800ExtraBold"
        }}>
          Playfair Display Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "PlayfairDisplay_900Black"
        }}>
          Playfair Display Black
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "PlayfairDisplay_400Regular_Italic"
        }}>
          Playfair Display Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "PlayfairDisplay_500Medium_Italic"
        }}>
          Playfair Display Medium Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "PlayfairDisplay_600SemiBold_Italic"
        }}>
          Playfair Display Semi Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "PlayfairDisplay_700Bold_Italic"
        }}>
          Playfair Display Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "PlayfairDisplay_800ExtraBold_Italic"
        }}>
          Playfair Display Extra Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "PlayfairDisplay_900Black_Italic"
        }}>
          Playfair Display Black Italic
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![PlayfairDisplay_400Regular](./400Regular/PlayfairDisplay_400Regular.ttf.png)|![PlayfairDisplay_500Medium](./500Medium/PlayfairDisplay_500Medium.ttf.png)|![PlayfairDisplay_600SemiBold](./600SemiBold/PlayfairDisplay_600SemiBold.ttf.png)||
|![PlayfairDisplay_700Bold](./700Bold/PlayfairDisplay_700Bold.ttf.png)|![PlayfairDisplay_800ExtraBold](./800ExtraBold/PlayfairDisplay_800ExtraBold.ttf.png)|![PlayfairDisplay_900Black](./900Black/PlayfairDisplay_900Black.ttf.png)||
|![PlayfairDisplay_400Regular_Italic](./400Regular_Italic/PlayfairDisplay_400Regular_Italic.ttf.png)|![PlayfairDisplay_500Medium_Italic](./500Medium_Italic/PlayfairDisplay_500Medium_Italic.ttf.png)|![PlayfairDisplay_600SemiBold_Italic](./600SemiBold_Italic/PlayfairDisplay_600SemiBold_Italic.ttf.png)||
|![PlayfairDisplay_700Bold_Italic](./700Bold_Italic/PlayfairDisplay_700Bold_Italic.ttf.png)|![PlayfairDisplay_800ExtraBold_Italic](./800ExtraBold_Italic/PlayfairDisplay_800ExtraBold_Italic.ttf.png)|![PlayfairDisplay_900Black_Italic](./900Black_Italic/PlayfairDisplay_900Black_Italic.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/playfair-display` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Playfair Display page on Google Fonts](https://fonts.google.com/specimen/Playfair+Display) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Playfair Display on Google Fonts](https://fonts.google.com/specimen/Playfair+Display)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/playfair-display)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/playfair-display)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
