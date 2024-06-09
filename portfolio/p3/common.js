async function init() {
    await loadPyodide();
}

async function loadPyodide() {
    window.pyodide = await loadPyodide({
        indexURL : "https://cdn.jsdelivr.net/pyodide/v0.18.1/full/"
    });
}

async function runPyodide() {
    const code = await (await fetch('pyodide.py')).text();
    await pyodide.runPythonAsync(code);
    document.getElementById('output').innerHTML = `Pyodide Output: ${pyodide.globals.get('output')}`;
}

function runBrython() {
    brython(1);
    setTimeout(() => {
        importScripts("brython.py");
        document.getElementById('output').innerHTML = `Brython Output: ${output}`;
    }, 1000);
}
