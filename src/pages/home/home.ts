import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { GoogleMaps, GoogleMap, GoogleMapsEvent, GoogleMapOptions } from '@ionic-native/google-maps';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {

	@ViewChild('map')
	private mapElement: ElementRef;
	private map: GoogleMap;

	constructor(public navCtrl: NavController, public platform: Platform) {

	}

	ionViewDidLoad() {
		console.log('ok');
		this.platform.ready().then(() => {
			console.log('ok2');
			this.loadMap();
		});
	}

	loadMap() {
		let mapOptions: GoogleMapOptions = {
			camera: {
				target: {
					lat: -20.5359701,
					lng: -47.3906893
				},
				zoom: 13
			}
		};

		let element = this.mapElement.nativeElement;
		console.log(element);
		this.map = GoogleMaps.create(element, mapOptions);
		console.log(this.map);
		//Get Geolocations
		this.map.one(GoogleMapsEvent.MAP_READY).then(() => {
			console.log('ready');
			let name = 'This is a test';
			let address = 'Rua Nabi Haber';
			let number_home = '465';
			let neighborhood = 'São José';

			let config = {
				title: name,
				snippet: address + ', ' + number_home + ' - ' + neighborhood,
				animation: 'DROP',
				flat: true,
				position: {
					lat: -20.5359701,
					lng: -47.3906893
				}
			};

			this.map.addMarker(config);

		}, (err) => {
			console.log('error');
			console.log(err);
		});
	}
}
