﻿import SetGeometryCommand from '../../command/SetGeometryCommand';
import UI from '../../ui/UI';

/**
 * 圆形几何体
 * @author mrdoob / http://mrdoob.com/
 */
function CircleGeometryPanel(editor, object) {
    var container = new UI.Row();

    var geometry = object.geometry;
    var parameters = geometry.parameters;

    // radius

    var radiusRow = new UI.Row();

    var radius = new UI.Number({
        value: parameters.radius,
        onChange: update
    });

    radiusRow.add(new UI.Text({
        text: '半径',
        style: 'width: 90px;'
    }));

    radiusRow.add(radius);

    container.add(radiusRow);

    // segments

    var segmentsRow = new UI.Row();

    var segments = new UI.Integer({
        value: parameters.segments,
        range: [3, Infinity],
        onChange: update
    });

    segmentsRow.add(new UI.Text({
        text: '段长',
        style: 'width: 90px;'
    }));

    segmentsRow.add(segments);

    container.add(segmentsRow);

    // thetaStart

    var thetaStartRow = new UI.Row();

    var thetaStart = new UI.Number({
        value: parameters.thetaStart,
        onChange: update
    });

    thetaStartRow.add(new UI.Text({
        text: 'θ开始',
        style: 'width: 90px;'
    }));

    thetaStartRow.add(thetaStart);

    container.add(thetaStartRow);

    // thetaLength

    var thetaLengthRow = new UI.Row();
    var thetaLength = new UI.Number({
        value: parameters.thetaLength,
        onChange: update
    });

    thetaLengthRow.add(new UI.Text({
        text: 'θ长度',
        style: 'width: 90px;'
    }));

    thetaLengthRow.add(thetaLength);

    container.add(thetaLengthRow);

    //

    function update() {

        editor.execute(new SetGeometryCommand(object, new THREE[geometry.type](
            radius.getValue(),
            segments.getValue(),
            thetaStart.getValue(),
            thetaLength.getValue()
        )));

    }

    container.render();

    return container;
};

export default CircleGeometryPanel;
