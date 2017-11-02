var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();

var connectionString = "mongodb: sval:Pokemon96! @ds051980.mlab.com:51980/cidm4382";
mongoose.connect(connectionString, { useMongoClient: true });

mongoose.Promise = global.Promise;

/*
{
    "_id": {
        "$oid": "59dbc45be472874901bb842c"
    },
    "weight": "26000",
    "vfriFlap5": "137",
    "vfriFlap10": "128",
    "vfriFlap15": "125",
    "vclimb": "148"
}
*/

var climbDataSchema = new mongoose.Schema({
    weight: Number,
    vfriFlap5: Number,
    vfriFlap10: Number,
    vfriFlap15: Number
});

var landingDataSchema = new mongoose.Schema({
    weight: Number,
    vApp: Number,
    vRef: Number,
    vGA: Number
});

var takeoffDataSchema = new mongoose.Schema({
    weight: Number,
    altitude0VR: Number,
    altitude0V2: Number,
    altitude2000VR: Number,
    altitude2000V2: Number,
    altitude4000VR: Number,
    altitude4000V2: Number,
    altitude6000VR: Number,
    altitude6000V2: Number,
    altitude8000VR: Number,
    altitude8000V2: Number,
    altitude10000VR: Number,
    altitude10000V2: Number
});

var airportDataSchema = new mongoose.Schema({
    icao: String,
    runwayID: Number,
    runwayLength: Number,
    runwayHeadingMagentic: Number,
    runwayHeadingTrue: Number
});

var ClimbData = mongoose.model('CilmbData', climbDataSchema, 'ClimbData');
var LandingData = mongoose.model('LandingData', landingDataSchema, 'LandingData');
var TakeoffData = mongoose.model('TakeoffData', takeoffDataSchema, 'TakeoffData');
var AirportData = mongoose.model('AirportData', airportDataSchema, 'AirportData');

/* GET home page. */
router.get('/', function(req, res, next) {
    //res.send('Hello, this is just a test');
    //res.render('index', { title: 'Express' });

    console.log("test message");

    ClimbData.find({}, function(err, climbdatas) {
        if (err) {
            res.send(err);
            return console.error(err);
        }

        var output = "";
        
        climbdatas.forEach(function(climbdata){
            console.log(climbdata.weight);
            output += "weight: " + climbdata.weight + "<br>";
            output += "vfriFlap5: " + climbdata.vfriFlap5 + "<br>";
            output += "vfriFlap10: " + climbdata.vfriFlap10 + "<br>";
            output += "vfriFlap15: " + climbdata.vfriFlap15 + "<br>";
        });

        res.send(output);
    });
});

router.get('/landing', function(req, res, next) {
    //res.send('Hello, this is just a test');
    //res.render('index', { title: 'Express' });

    console.log("test message");

    LandingData.find({}, function(err, landingdatas) {
        if (err) {
            res.send(err);
            return console.error(err);
        }

        var output = "";
        
        landingdatas.forEach(function(landingdata){
            console.log(landingdata.weight);
            output += "weight: " + landingdata.weight + "<br>";
            output += "vApp: " + landingdata.vApp + "<br>";
            output += "vRef: " + landingdata.vRef + "<br>";
            output += "vGA: " + landingdata.vGA + "<br>";
        });

        res.send(output);
    });
});


router.get('/takeoff', function(req, res, next) {
    //res.send('Hello, this is just a test');
    //res.render('index', { title: 'Express' });

    console.log("test message");

    TakeoffData.find({}, function(err, takeoffdatas) {
        if (err) {
            res.send(err);
            return console.error(err);
        }

        var output = "";
        
        takeoffdatas.forEach(function(takeoffdata){
            console.log(takeoffdata.weight);
            output += "weight: " + takeoffdata.weight + "<br>";
            output += "altitude0VR: "  + takeoffdata.altitude0VR + "<br>";
            output += "altitude0V2: " + takeoffdata.altitude0V2 + "<br>";
            output += "altitude2000VR: " + takeoffdata.altitude2000VR + "<br>";
            output += "altitude2000V2: " + takeoffdata.altitude2000V2 + "<br>";
            output += "altitude4000VR: " + takeoffdata.altitude4000VR + "<br>";
            output += "altitude4000V2: " + takeoffdata.altitude4000V2 + "<br>";
            output += "altitude6000VR: " + takeoffdata.altitude6000VR + "<br>";
            output += "altitude6000V2: " + takeoffdata.altitude6000V2 + "<br>";
            output += "altitude8000VR: " + takeoffdata.altitude8000VR + "<br>";
            output += "altitude8000V2: " + takeoffdata.altitude8000V2+ "<br>";
            output += "altitude10000V: " + takeoffdata.altitude10000V + "<br>";
            output += "altitude10000V2: " + takeoffdata.altitude10000V2 + "<br>";
        });

        res.send(output);
    });
});

router.get('/airport', function(req, res, next) {
    //res.send('Hello, this is just a test');
    //res.render('index', { title: 'Express' });

    console.log("test message");

    AirportData.find({}, function(err, airportdatas) {
        if (err) {
            res.send(err);
            return console.error(err);
        }

        var output = "";
        
        airportdatas.forEach(function(airportdata){
            console.log(airportdata.weight);
            output += "icao: " + airportdata.icao + "<br>";
            output += "runwayID: " + airportdata.runwayID + "<br>";
            output += "runwayLength: " + airportdata.runwayLength + "<br>";
            output += "runwayHeadingMagnetic: " + airportdata.runwayHeadingMagnetic + "<br>";
            output += "runwayHeadingTrue: " + airportdata.runwayHeadingTrue + "<br>";
        });

        res.send(output);
    });
});

module.exports = router;