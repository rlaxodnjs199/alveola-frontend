export function constructRowsFromData(ctScanList) {
  let count = 1;

  ctScanList.forEach((ctScan) => {
    ctScan["id"] = count;
    count++;
  });

  return ctScanList;
}
