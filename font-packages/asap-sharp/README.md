# @expo-google-fonts/asap-sharp

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/asap-sharp)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/asap-sharp)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/asap-sharp)

This package lets you use the [**Asap Sharp**](https://fonts.google.com/specimen/Asap+Sharp) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Asap Sharp

![Asap Sharp](./font-family.png)

This font family contains [18 styles](#-gallery).

- `AsapSharp_100Thin`
- `AsapSharp_200ExtraLight`
- `AsapSharp_300Light`
- `AsapSharp_400Regular`
- `AsapSharp_500Medium`
- `AsapSharp_600SemiBold`
- `AsapSharp_700Bold`
- `AsapSharp_800ExtraBold`
- `AsapSharp_900Black`
- `AsapSharp_100Thin_Italic`
- `AsapSharp_200ExtraLight_Italic`
- `AsapSharp_300Light_Italic`
- `AsapSharp_400Regular_Italic`
- `AsapSharp_500Medium_Italic`
- `AsapSharp_600SemiBold_Italic`
- `AsapSharp_700Bold_Italic`
- `AsapSharp_800ExtraBold_Italic`
- `AsapSharp_900Black_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/asap-sharp expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/asap-sharp/useFonts';
import { AsapSharp_100Thin } from '@expo-google-fonts/asap-sharp/100Thin';
import { AsapSharp_200ExtraLight } from '@expo-google-fonts/asap-sharp/200ExtraLight';
import { AsapSharp_300Light } from '@expo-google-fonts/asap-sharp/300Light';
import { AsapSharp_400Regular } from '@expo-google-fonts/asap-sharp/400Regular';
import { AsapSharp_500Medium } from '@expo-google-fonts/asap-sharp/500Medium';
import { AsapSharp_600SemiBold } from '@expo-google-fonts/asap-sharp/600SemiBold';
import { AsapSharp_700Bold } from '@expo-google-fonts/asap-sharp/700Bold';
import { AsapSharp_800ExtraBold } from '@expo-google-fonts/asap-sharp/800ExtraBold';
import { AsapSharp_900Black } from '@expo-google-fonts/asap-sharp/900Black';
import { AsapSharp_100Thin_Italic } from '@expo-google-fonts/asap-sharp/100Thin_Italic';
import { AsapSharp_200ExtraLight_Italic } from '@expo-google-fonts/asap-sharp/200ExtraLight_Italic';
import { AsapSharp_300Light_Italic } from '@expo-google-fonts/asap-sharp/300Light_Italic';
import { AsapSharp_400Regular_Italic } from '@expo-google-fonts/asap-sharp/400Regular_Italic';
import { AsapSharp_500Medium_Italic } from '@expo-google-fonts/asap-sharp/500Medium_Italic';
import { AsapSharp_600SemiBold_Italic } from '@expo-google-fonts/asap-sharp/600SemiBold_Italic';
import { AsapSharp_700Bold_Italic } from '@expo-google-fonts/asap-sharp/700Bold_Italic';
import { AsapSharp_800ExtraBold_Italic } from '@expo-google-fonts/asap-sharp/800ExtraBold_Italic';
import { AsapSharp_900Black_Italic } from '@expo-google-fonts/asap-sharp/900Black_Italic';

export default () => {

  let [fontsLoaded] = useFonts({
    AsapSharp_100Thin, 
    AsapSharp_200ExtraLight, 
    AsapSharp_300Light, 
    AsapSharp_400Regular, 
    AsapSharp_500Medium, 
    AsapSharp_600SemiBold, 
    AsapSharp_700Bold, 
    AsapSharp_800ExtraBold, 
    AsapSharp_900Black, 
    AsapSharp_100Thin_Italic, 
    AsapSharp_200ExtraLight_Italic, 
    AsapSharp_300Light_Italic, 
    AsapSharp_400Regular_Italic, 
    AsapSharp_500Medium_Italic, 
    AsapSharp_600SemiBold_Italic, 
    AsapSharp_700Bold_Italic, 
    AsapSharp_800ExtraBold_Italic, 
    AsapSharp_900Black_Italic
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
          fontFamily: "AsapSharp_100Thin"
        }}>
          Asap Sharp Thin
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AsapSharp_200ExtraLight"
        }}>
          Asap Sharp Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AsapSharp_300Light"
        }}>
          Asap Sharp Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AsapSharp_400Regular"
        }}>
          Asap Sharp Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AsapSharp_500Medium"
        }}>
          Asap Sharp Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AsapSharp_600SemiBold"
        }}>
          Asap Sharp Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AsapSharp_700Bold"
        }}>
          Asap Sharp Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AsapSharp_800ExtraBold"
        }}>
          Asap Sharp Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AsapSharp_900Black"
        }}>
          Asap Sharp Black
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AsapSharp_100Thin_Italic"
        }}>
          Asap Sharp Thin Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AsapSharp_200ExtraLight_Italic"
        }}>
          Asap Sharp Extra Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AsapSharp_300Light_Italic"
        }}>
          Asap Sharp Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AsapSharp_400Regular_Italic"
        }}>
          Asap Sharp Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AsapSharp_500Medium_Italic"
        }}>
          Asap Sharp Medium Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AsapSharp_600SemiBold_Italic"
        }}>
          Asap Sharp Semi Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AsapSharp_700Bold_Italic"
        }}>
          Asap Sharp Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AsapSharp_800ExtraBold_Italic"
        }}>
          Asap Sharp Extra Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AsapSharp_900Black_Italic"
        }}>
          Asap Sharp Black Italic
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![AsapSharp_100Thin](./100Thin/AsapSharp_100Thin.ttf.png)|![AsapSharp_200ExtraLight](./200ExtraLight/AsapSharp_200ExtraLight.ttf.png)|![AsapSharp_300Light](./300Light/AsapSharp_300Light.ttf.png)||
|![AsapSharp_400Regular](./400Regular/AsapSharp_400Regular.ttf.png)|![AsapSharp_500Medium](./500Medium/AsapSharp_500Medium.ttf.png)|![AsapSharp_600SemiBold](./600SemiBold/AsapSharp_600SemiBold.ttf.png)||
|![AsapSharp_700Bold](./700Bold/AsapSharp_700Bold.ttf.png)|![AsapSharp_800ExtraBold](./800ExtraBold/AsapSharp_800ExtraBold.ttf.png)|![AsapSharp_900Black](./900Black/AsapSharp_900Black.ttf.png)||
|![AsapSharp_100Thin_Italic](./100Thin_Italic/AsapSharp_100Thin_Italic.ttf.png)|![AsapSharp_200ExtraLight_Italic](./200ExtraLight_Italic/AsapSharp_200ExtraLight_Italic.ttf.png)|![AsapSharp_300Light_Italic](./300Light_Italic/AsapSharp_300Light_Italic.ttf.png)||
|![AsapSharp_400Regular_Italic](./400Regular_Italic/AsapSharp_400Regular_Italic.ttf.png)|![AsapSharp_500Medium_Italic](./500Medium_Italic/AsapSharp_500Medium_Italic.ttf.png)|![AsapSharp_600SemiBold_Italic](./600SemiBold_Italic/AsapSharp_600SemiBold_Italic.ttf.png)||
|![AsapSharp_700Bold_Italic](./700Bold_Italic/AsapSharp_700Bold_Italic.ttf.png)|![AsapSharp_800ExtraBold_Italic](./800ExtraBold_Italic/AsapSharp_800ExtraBold_Italic.ttf.png)|![AsapSharp_900Black_Italic](./900Black_Italic/AsapSharp_900Black_Italic.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/asap-sharp` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Asap Sharp page on Google Fonts](https://fonts.google.com/specimen/Asap+Sharp) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Asap Sharp on Google Fonts](https://fonts.google.com/specimen/Asap+Sharp)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/asap-sharp)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/asap-sharp)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
