# @expo-google-fonts/afacad

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/afacad)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/afacad)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/afacad)

This package lets you use the [**Afacad**](https://fonts.google.com/specimen/Afacad) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Afacad

![Afacad](./font-family.png)

This font family contains [8 styles](#-gallery).

- `Afacad_400Regular`
- `Afacad_500Medium`
- `Afacad_600SemiBold`
- `Afacad_700Bold`
- `Afacad_400Regular_Italic`
- `Afacad_500Medium_Italic`
- `Afacad_600SemiBold_Italic`
- `Afacad_700Bold_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/afacad expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/afacad/useFonts';
import { Afacad_400Regular } from '@expo-google-fonts/afacad/400Regular';
import { Afacad_500Medium } from '@expo-google-fonts/afacad/500Medium';
import { Afacad_600SemiBold } from '@expo-google-fonts/afacad/600SemiBold';
import { Afacad_700Bold } from '@expo-google-fonts/afacad/700Bold';
import { Afacad_400Regular_Italic } from '@expo-google-fonts/afacad/400Regular_Italic';
import { Afacad_500Medium_Italic } from '@expo-google-fonts/afacad/500Medium_Italic';
import { Afacad_600SemiBold_Italic } from '@expo-google-fonts/afacad/600SemiBold_Italic';
import { Afacad_700Bold_Italic } from '@expo-google-fonts/afacad/700Bold_Italic';

export default () => {

  let [fontsLoaded] = useFonts({
    Afacad_400Regular, 
    Afacad_500Medium, 
    Afacad_600SemiBold, 
    Afacad_700Bold, 
    Afacad_400Regular_Italic, 
    Afacad_500Medium_Italic, 
    Afacad_600SemiBold_Italic, 
    Afacad_700Bold_Italic
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
          fontFamily: "Afacad_400Regular"
        }}>
          Afacad Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Afacad_500Medium"
        }}>
          Afacad Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Afacad_600SemiBold"
        }}>
          Afacad Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Afacad_700Bold"
        }}>
          Afacad Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Afacad_400Regular_Italic"
        }}>
          Afacad Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Afacad_500Medium_Italic"
        }}>
          Afacad Medium Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Afacad_600SemiBold_Italic"
        }}>
          Afacad Semi Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Afacad_700Bold_Italic"
        }}>
          Afacad Bold Italic
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![Afacad_400Regular](./400Regular/Afacad_400Regular.ttf.png)|![Afacad_500Medium](./500Medium/Afacad_500Medium.ttf.png)|![Afacad_600SemiBold](./600SemiBold/Afacad_600SemiBold.ttf.png)||
|![Afacad_700Bold](./700Bold/Afacad_700Bold.ttf.png)|![Afacad_400Regular_Italic](./400Regular_Italic/Afacad_400Regular_Italic.ttf.png)|![Afacad_500Medium_Italic](./500Medium_Italic/Afacad_500Medium_Italic.ttf.png)||
|![Afacad_600SemiBold_Italic](./600SemiBold_Italic/Afacad_600SemiBold_Italic.ttf.png)|![Afacad_700Bold_Italic](./700Bold_Italic/Afacad_700Bold_Italic.ttf.png)|||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/afacad` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Afacad page on Google Fonts](https://fonts.google.com/specimen/Afacad) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Afacad on Google Fonts](https://fonts.google.com/specimen/Afacad)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/afacad)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/afacad)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
