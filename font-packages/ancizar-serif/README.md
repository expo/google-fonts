# @expo-google-fonts/ancizar-serif

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/ancizar-serif)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/ancizar-serif)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/ancizar-serif)

This package lets you use the [**Ancizar Serif**](https://fonts.google.com/specimen/Ancizar+Serif) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Ancizar Serif

![Ancizar Serif](./font-family.png)

This font family contains [14 styles](#-gallery).

- `AncizarSerif_300Light`
- `AncizarSerif_400Regular`
- `AncizarSerif_500Medium`
- `AncizarSerif_600SemiBold`
- `AncizarSerif_700Bold`
- `AncizarSerif_800ExtraBold`
- `AncizarSerif_900Black`
- `AncizarSerif_300Light_Italic`
- `AncizarSerif_400Regular_Italic`
- `AncizarSerif_500Medium_Italic`
- `AncizarSerif_600SemiBold_Italic`
- `AncizarSerif_700Bold_Italic`
- `AncizarSerif_800ExtraBold_Italic`
- `AncizarSerif_900Black_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/ancizar-serif expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/ancizar-serif/useFonts';
import { AncizarSerif_300Light } from '@expo-google-fonts/ancizar-serif/300Light';
import { AncizarSerif_400Regular } from '@expo-google-fonts/ancizar-serif/400Regular';
import { AncizarSerif_500Medium } from '@expo-google-fonts/ancizar-serif/500Medium';
import { AncizarSerif_600SemiBold } from '@expo-google-fonts/ancizar-serif/600SemiBold';
import { AncizarSerif_700Bold } from '@expo-google-fonts/ancizar-serif/700Bold';
import { AncizarSerif_800ExtraBold } from '@expo-google-fonts/ancizar-serif/800ExtraBold';
import { AncizarSerif_900Black } from '@expo-google-fonts/ancizar-serif/900Black';
import { AncizarSerif_300Light_Italic } from '@expo-google-fonts/ancizar-serif/300Light_Italic';
import { AncizarSerif_400Regular_Italic } from '@expo-google-fonts/ancizar-serif/400Regular_Italic';
import { AncizarSerif_500Medium_Italic } from '@expo-google-fonts/ancizar-serif/500Medium_Italic';
import { AncizarSerif_600SemiBold_Italic } from '@expo-google-fonts/ancizar-serif/600SemiBold_Italic';
import { AncizarSerif_700Bold_Italic } from '@expo-google-fonts/ancizar-serif/700Bold_Italic';
import { AncizarSerif_800ExtraBold_Italic } from '@expo-google-fonts/ancizar-serif/800ExtraBold_Italic';
import { AncizarSerif_900Black_Italic } from '@expo-google-fonts/ancizar-serif/900Black_Italic';

export default () => {

  let [fontsLoaded] = useFonts({
    AncizarSerif_300Light, 
    AncizarSerif_400Regular, 
    AncizarSerif_500Medium, 
    AncizarSerif_600SemiBold, 
    AncizarSerif_700Bold, 
    AncizarSerif_800ExtraBold, 
    AncizarSerif_900Black, 
    AncizarSerif_300Light_Italic, 
    AncizarSerif_400Regular_Italic, 
    AncizarSerif_500Medium_Italic, 
    AncizarSerif_600SemiBold_Italic, 
    AncizarSerif_700Bold_Italic, 
    AncizarSerif_800ExtraBold_Italic, 
    AncizarSerif_900Black_Italic
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
          fontFamily: "AncizarSerif_300Light"
        }}>
          Ancizar Serif Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AncizarSerif_400Regular"
        }}>
          Ancizar Serif Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AncizarSerif_500Medium"
        }}>
          Ancizar Serif Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AncizarSerif_600SemiBold"
        }}>
          Ancizar Serif Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AncizarSerif_700Bold"
        }}>
          Ancizar Serif Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AncizarSerif_800ExtraBold"
        }}>
          Ancizar Serif Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AncizarSerif_900Black"
        }}>
          Ancizar Serif Black
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AncizarSerif_300Light_Italic"
        }}>
          Ancizar Serif Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AncizarSerif_400Regular_Italic"
        }}>
          Ancizar Serif Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AncizarSerif_500Medium_Italic"
        }}>
          Ancizar Serif Medium Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AncizarSerif_600SemiBold_Italic"
        }}>
          Ancizar Serif Semi Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AncizarSerif_700Bold_Italic"
        }}>
          Ancizar Serif Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AncizarSerif_800ExtraBold_Italic"
        }}>
          Ancizar Serif Extra Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AncizarSerif_900Black_Italic"
        }}>
          Ancizar Serif Black Italic
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![AncizarSerif_300Light](./300Light/AncizarSerif_300Light.ttf.png)|![AncizarSerif_400Regular](./400Regular/AncizarSerif_400Regular.ttf.png)|![AncizarSerif_500Medium](./500Medium/AncizarSerif_500Medium.ttf.png)||
|![AncizarSerif_600SemiBold](./600SemiBold/AncizarSerif_600SemiBold.ttf.png)|![AncizarSerif_700Bold](./700Bold/AncizarSerif_700Bold.ttf.png)|![AncizarSerif_800ExtraBold](./800ExtraBold/AncizarSerif_800ExtraBold.ttf.png)||
|![AncizarSerif_900Black](./900Black/AncizarSerif_900Black.ttf.png)|![AncizarSerif_300Light_Italic](./300Light_Italic/AncizarSerif_300Light_Italic.ttf.png)|![AncizarSerif_400Regular_Italic](./400Regular_Italic/AncizarSerif_400Regular_Italic.ttf.png)||
|![AncizarSerif_500Medium_Italic](./500Medium_Italic/AncizarSerif_500Medium_Italic.ttf.png)|![AncizarSerif_600SemiBold_Italic](./600SemiBold_Italic/AncizarSerif_600SemiBold_Italic.ttf.png)|![AncizarSerif_700Bold_Italic](./700Bold_Italic/AncizarSerif_700Bold_Italic.ttf.png)||
|![AncizarSerif_800ExtraBold_Italic](./800ExtraBold_Italic/AncizarSerif_800ExtraBold_Italic.ttf.png)|![AncizarSerif_900Black_Italic](./900Black_Italic/AncizarSerif_900Black_Italic.ttf.png)|||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/ancizar-serif` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Ancizar Serif page on Google Fonts](https://fonts.google.com/specimen/Ancizar+Serif) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Ancizar Serif on Google Fonts](https://fonts.google.com/specimen/Ancizar+Serif)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/ancizar-serif)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/ancizar-serif)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
