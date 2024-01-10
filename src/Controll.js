import * as THREE from 'https://cdn.skypack.dev/three@0.132.2';

function movement(element, cube) {
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };
    let currentRotationSpeed = { x: 0, y: 0 };
    let ROTATION_FRICTION = 0.1;  // 慣性のための摩擦係数 0.9がbetter

    let lastTouchDistance = null;
    let lastTap = 0;
    //let lastCenter = null;

    let lastTouch1Position = null;
    let lastTouch2Position = null;

    let currentScaleSpeed = 1.0;
    const SCALE_FRICTION = 0.7;
    const maxscale = 3.7;
    const minscale = 0.9;

    element.addEventListener('mousedown', e => {
        isDragging = true;
        previousMousePosition = { x: e.offsetX, y: e.offsetY };
    });

    element.addEventListener('mousemove', e => {
        if (isDragging) {
            const deltaX = e.offsetX - previousMousePosition.x;
            const deltaY = e.offsetY - previousMousePosition.y;

            // 現在の回転速度を保存
            currentRotationSpeed.x = deltaX;
            currentRotationSpeed.y = deltaY;

            rotateCubeByDelta(deltaX, deltaY);
            previousMousePosition = { x: e.offsetX, y: e.offsetY };
        }
    });

    element.addEventListener('mouseup', e => {
        isDragging = false;
    });

    element.addEventListener('wheel', e => {
        var scaleFactor = 1.1;
        const maxscale = 3.7;
        const minscale = 0.9;
        if (e.deltaY < 0) {
            cube.scale.x = Math.min(cube.scale.x * scaleFactor, maxscale);
            cube.scale.y = Math.min(cube.scale.y * scaleFactor, maxscale);
            cube.scale.z = Math.min(cube.scale.z * scaleFactor, maxscale);
        } else {
            cube.scale.x = Math.max(cube.scale.x / scaleFactor, minscale);
            cube.scale.y = Math.max(cube.scale.y / scaleFactor, minscale);
            cube.scale.z = Math.max(cube.scale.z / scaleFactor, minscale);
        }
    }, false);

    element.addEventListener('touchmove', e => {
        e.preventDefault(); // デフォルトのブラウザのズーム動作を停止

        if (e.touches.length == 1) {
            const touch = e.touches[0];
            const deltaX = touch.pageX - previousMousePosition.x;
            const deltaY = touch.pageY - previousMousePosition.y;

            const rotationFactor = 0.1;  // この係数を調整して、回転の感度を制御します
            const adjustedDeltaX = deltaX * rotationFactor;
            const adjustedDeltaY = deltaY * rotationFactor;

            currentRotationSpeed.x = adjustedDeltaX;
            currentRotationSpeed.y = adjustedDeltaY;

            rotateCubeByDelta(adjustedDeltaX, adjustedDeltaY);
            previousMousePosition = { x: touch.pageX, y: touch.pageY };
        }


        if (e.touches.length == 2) {
            const touch1 = e.touches[0];
            const touch2 = e.touches[1];

            // 現在の2本指の中心点を求める
            const currentCenter = {
                x: (touch1.pageX + touch2.pageX) / 2,
                y: (touch1.pageY + touch2.pageY) / 2
            };

            const currentTouchDistance = Math.hypot(
                touch1.pageX - touch2.pageX,
                touch1.pageY - touch2.pageY
            );

            if (lastTouchDistance) {
                const scaleFactor = currentTouchDistance / lastTouchDistance;
                const scaleSensitivity = 0.5;  // この係数を調整して、スケーリングの感度を制御します
                const adjustedScaleFactor = 1 + (scaleFactor - 1) * scaleSensitivity;

                currentScaleSpeed *= adjustedScaleFactor;

                lastTouchDistance = currentTouchDistance;
            }

            // 2本指の回転→左側の回転だけ逆に回転してまう
            if (lastTouch1Position && lastTouch2Position) {
                // 各指の移動量を計算
                const deltaX1 = touch1.pageX - lastTouch1Position.x;
                const deltaY1 = touch1.pageY - lastTouch1Position.y;
                const movement1 = Math.sqrt(deltaX1 * deltaX1 + deltaY1 * deltaY1);

                const deltaX2 = touch2.pageX - lastTouch2Position.x;
                const deltaY2 = touch2.pageY - lastTouch2Position.y;
                const movement2 = Math.sqrt(deltaX2 * deltaX2 + deltaY2 * deltaY2);

                // 動いている指を判別
                const isDominantLeft = movement1 > movement2;
                const dominantDelta = isDominantLeft ? { x: deltaX1, y: deltaY1 } : { x: deltaX2, y: deltaY2 };

                // 合計の移動量を計算
                const totalDeltaX = dominantDelta.x;
                const totalDeltaY = dominantDelta.y;

                // 2つの指のベクトルを作成
                const initialVector = new THREE.Vector2(lastTouch2Position.x - lastTouch1Position.x, lastTouch2Position.y - lastTouch1Position.y);
                const currentVector = new THREE.Vector2(touch2.pageX - touch1.pageX, touch2.pageY - touch1.pageY);

                // ベクトルの差分を計算して方向を取得
                const deltaVector = currentVector.clone().sub(initialVector);
                const rotationDirectionModifier = isDominantLeft ? -1 : 1;
                const rotationDirection = rotationDirectionModifier * -Math.sign(deltaVector.x);

                // 回転量を計算
                const rotationSensitivity = 0.005;  // この値を下げることで、回転の感度を下げます。
                const rotationMagnitude = Math.sqrt(totalDeltaX * totalDeltaX + totalDeltaY * totalDeltaY) * rotationSensitivity * rotationDirection;


                const deltaRotationQuaternion = new THREE.Quaternion();
                deltaRotationQuaternion.setFromAxisAngle(new THREE.Vector3(0, 0, -1), rotationMagnitude);
                cube.quaternion.multiplyQuaternions(deltaRotationQuaternion, cube.quaternion);
            }



            lastTouch1Position = { x: touch1.pageX, y: touch1.pageY };
            lastTouch2Position = { x: touch2.pageX, y: touch2.pageY };




        }
    });

    element.addEventListener('touchstart', e => {
        e.preventDefault();

        if (e.touches.length === 1) {
            const touch = e.touches[0];
            previousMousePosition = { x: touch.pageX, y: touch.pageY };

            const currentTime = new Date().getTime();
            const tapLength = currentTime - lastTap;
            const DOUBLE_TAP_THRESHOLD = 200;

            if (tapLength < DOUBLE_TAP_THRESHOLD && tapLength > 0) {
                const scaleFactor = 1.3;
                cube.scale.x *= scaleFactor;
                cube.scale.y *= scaleFactor;
                cube.scale.z *= scaleFactor;
            }

            lastTap = currentTime;
        }

        if (e.touches.length === 2) {
            const touch1 = e.touches[0];
            const touch2 = e.touches[1];

            lastTouchDistance = Math.hypot(
                touch1.pageX - touch2.pageX,
                touch1.pageY - touch2.pageY
            );
            lastCenter = {
                x: (touch1.pageX + touch2.pageX) / 2,
                y: (touch1.pageY + touch2.pageY) / 2
            };
            lastTouch1Position = { x: touch1.pageX, y: touch1.pageY };
            lastTouch2Position = { x: touch2.pageX, y: touch2.pageY };
        }
    });

    element.addEventListener('touchend', e => {
        if (e.touches.length < 2) {
            lastTouchDistance = null;
        }
        if (e.touches.length <= 1) {
            lastTouch1Position = null;
            lastTouch2Position = null;
        }
        isDragging = false;
    });


    function rotateCubeByDelta(deltaX, deltaY) {
        const deltaRotationQuaternion = new THREE.Quaternion()
            .setFromEuler(new THREE.Euler(
                toRadians(deltaY),
                toRadians(deltaX),
                0,
                'XYZ'
            ));
        cube.quaternion.multiplyQuaternions(deltaRotationQuaternion, cube.quaternion);
    }

    function toRadians(angle) {
        return angle * (Math.PI / 180);
    }

    // 慣性を実装
    function animate() {
        if (!isDragging) {
            if (Math.abs(currentRotationSpeed.x) > 0.1 || Math.abs(currentRotationSpeed.y) > 0.1) {
                rotateCubeByDelta(currentRotationSpeed.x, currentRotationSpeed.y);

                // 摩擦を適用
                currentRotationSpeed.x *= ROTATION_FRICTION;
                currentRotationSpeed.y *= ROTATION_FRICTION;
            }
            // スケーリングに慣性を適用
            if (Math.abs(currentScaleSpeed - 1.0) > 0.01) {  // 1.0 からの変動を検出
                cube.scale.x = Math.min(Math.max(cube.scale.x * currentScaleSpeed, minscale), maxscale);
                cube.scale.y = Math.min(Math.max(cube.scale.y * currentScaleSpeed, minscale), maxscale);
                cube.scale.z = Math.min(Math.max(cube.scale.z * currentScaleSpeed, minscale), maxscale);

                currentScaleSpeed = (currentScaleSpeed - 1.0) * SCALE_FRICTION + 1.0;  // 慣性を適用
            }
        }

        requestAnimationFrame(animate);
    }
    animate();


}

export default movement;