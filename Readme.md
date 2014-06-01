#Cordova Integration for Union Capital Boston -- #RHoKBoston14

This app was created for RHoK Boston 14 and it integrates a meteor based app for Union Capital Boston. Find the repo [here](https://github.com/drenfr01/unionCapital).

## Background Info for the integration
There is a github organization that is compiling all available data and
solutions: https://github.com/SpaceCapsule

Overview of available solutions: There are three different solutions described [here](http://zeroasterisk.com/2013/08/22/meteor-phonegapcordova-roundup-fall-2013/).

I have tried two, but so far only one is working on the phone (showing stuff)
but the phone is not talking to the back end on the GreenTown Labs network (see known issues below). The solution that half works is [packmeteor](https://github.com/SpaceCapsule/packmeteor).


##Steps to build the app

Installing Cordova: It can be downloaded, but I've found the the node CLI works pretty well: 
    
    npm install cordova -g

Install packmeteor with:

    npm install packmeteor -g

Packmeteor works by packaging an app from a local server that has to be running. If you want the app to talk to a particular server, you can provide a flag:

    packmeteor -s http://YOUR_IP_HERE:3000
    
This command has to be run from the *www* folder of an already existing Cordova app, purposely created for this. Do not create this app within the meteor project or it will start erroring out when run. 

Create the app with (You can fork this repo and don't need to create a new app!):

    cordova create ucApp com.meteor.unioncapital.app UCApp

Install android platform (make sure you have all tools for Android in your
PATH):

    cordova platform add android

Now you can package the app:

    packmeteor -s http://YOUR_IP_HERE:3000
    
If you get the error:

    Start building cordova Meteor app
    Incompatible packmeteor.manifest format

Install packmeteor through mtr:
    
    mrt add packmeteor

After the app is packaged you can run it in the emulator or an attached device, for instance:

    cordova run android


##Other solutions:
[meteor-phonegap](https://github.com/guaka/meteor-phonegap):
This guy takes the app from a deployed server at *.meteor.com and packs it up to an android apk. It seems to work, but after loading the app on my phone, it keeps restarting in a loop. Their example (meteor docs) works well on my phone though. The same happens with packmeteor when you pack from a meteor subdomain (see known issues).

##Debugging on the phone
With Cordova installed, you can install a plugin that
will let you connect to the phone directly through about:inspect (chrome dev
tools). Tool is at https://github.com/jrstarke/webview-debug

#Known Issues
During the hackathon the app would not talk to the server, but it turned out to be the network at GreenTown labs. It works fine in a normal network.
    
  * It does not package images reliably
  * It does not work with an app on *.meteor.com (it keeps loading the app in a loop)
