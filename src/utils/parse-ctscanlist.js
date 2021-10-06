export function constructRowsFromData(ctScanList) {
  let count = 1;

  ctScanList.forEach((ctScan) => {
    ctScan.id = count;
    count += 1;
  });

  return ctScanList;
}
