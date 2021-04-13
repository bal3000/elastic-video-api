export interface SeqAggregation {
  seqNumbers: SeqNumbersAgg;
}

interface SeqNumbersAgg {
  doc_count_error_upper_bound: number;
  sum_other_doc_count: number;
  buckets: Bucket[];
}

interface Bucket {
  key: number;
  doc_count: number;
}
