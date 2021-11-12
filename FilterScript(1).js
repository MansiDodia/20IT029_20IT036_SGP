/* Minification failed. Returning unminified contents.
(4,63-64): run-time error JS1195: Expected expression: >
(5,43-44): run-time error JS1195: Expected expression: >
(7,14-15): run-time error JS1004: Expected ';': )
(16,42-43): run-time error JS1195: Expected expression: >
(16,74-75): run-time error JS1004: Expected ';': )
(24,37-38): run-time error JS1195: Expected expression: >
(24,83-84): run-time error JS1004: Expected ';': )
 */

function RemoveDuplicates(pobjSource, pstrNode) {
    try {
        pobjSource = pobjSource.filter((Target, index, self) =>
            index === self.findIndex((t) => (
                t[pstrNode] === Target[pstrNode]
            ))
        );
    } catch (e) {
    }
    return pobjSource;
}

function FilterObject(pobjSource, pstrNode, pobjOption) {
    try {
        return pobjSource.filter(Source => Source[pstrNode] == pobjOption);
    } catch (e) {

    }
}

function FilterDate(pobjSource) {
    try {
        return pobjSource.filter(q => moment(q.TravelDate, 'MMDDYYYY') >= moment());
    } catch (e) {

    }
};
