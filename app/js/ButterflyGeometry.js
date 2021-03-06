var ButterflyGeometry = function () {
	
	THREE.Geometry.call( this );

	var verts = this.vertices;
	var faces = this.faces;
	var uvs = this.faceVertexUvs[ 0 ];

	var fi = 0;

	// Wings
	this.wingsSpan = 10;
	this.wingsWidth = 12;

	verts.push(
		new THREE.Vector3(0, 0, -this.wingsWidth),
		new THREE.Vector3(-this.wingsSpan, 0, -this.wingsWidth),
		new THREE.Vector3(0, 0, this.wingsWidth)
	);

	verts.push(
		new THREE.Vector3(-this.wingsSpan, 0, -this.wingsWidth),
		new THREE.Vector3(-this.wingsSpan, 0, this.wingsWidth),
		new THREE.Vector3(0, 0, this.wingsWidth)
	);
	
	faces.push(new THREE.Face3(
		fi++,
		fi++,
		fi++
	));

	faces.push(new THREE.Face3(
		fi++,
		fi++,
		fi++
	));

	
	uvs.push([
		new THREE.Vector2(0.5, 0),
		new THREE.Vector2(0, 0),
		new THREE.Vector2(0.5, 1)
	]);

	uvs.push([
		new THREE.Vector2(0, 0),
		new THREE.Vector2(0, 1),
		new THREE.Vector2(0.5, 1)
	]);
     
	// extra triangel
	
	verts.push(
		new THREE.Vector3(0, 0, -this.wingsWidth),
		new THREE.Vector3(this.wingsSpan, 0, -this.wingsWidth),
		new THREE.Vector3(0, 0, this.wingsWidth)
	);

	verts.push(
		new THREE.Vector3(this.wingsSpan, 0, -this.wingsWidth),
		new THREE.Vector3(this.wingsSpan, 0, this.wingsWidth),
		new THREE.Vector3(0, 0, this.wingsWidth)
	);

	faces.push(new THREE.Face3(
		fi++,
		fi++,
		fi++
	));

	faces.push(new THREE.Face3(
		fi++,
		fi++,
		fi++
	));

	uvs.push([
		new THREE.Vector2(0.5, 0),
		new THREE.Vector2(1, 0),
		new THREE.Vector2(0.5, 1)
	]);

	uvs.push([
		new THREE.Vector2(1, 0),
		new THREE.Vector2(1, 1),
		new THREE.Vector2(0.5, 1)
	]);
	
	
	this.applyMatrix( new THREE.Matrix4().makeScale( 1, 1, 1 ) );

	//this.computeCentroids();
	this.computeFaceNormals();
	this.computeVertexNormals();
};

ButterflyGeometry.prototype = Object.create( THREE.Geometry.prototype );

ButterflyGeometry.prototype.rotateWings = function(radians){
		// axis Y
		this.vertices[ 1 ].y = this.vertices[ 3 ].y = this.vertices[ 4 ].y = this.vertices[ 7 ].y = this.vertices[ 9 ].y = this.vertices[ 10 ].y = (Math.sin( radians ) * this.wingsWidth);
		// axis X
		this.vertices[ 1 ].x = this.vertices[ 3 ].x = this.vertices[ 4 ].x  = -1 * this.wingsWidth * Math.cos( radians );
		this.vertices[ 7 ].x = this.vertices[ 9 ].x = this.vertices[ 10 ].x = this.wingsWidth * Math.cos( radians ); 
};

