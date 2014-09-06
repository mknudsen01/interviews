def to_arabic numerals_string
  numerals = numerals_string.split('')
  numerals.each_index.inject(0) do |memo, index|
    current_value = lookup_numeral numerals[index]
    next_value = lookup_numeral(numerals[index + 1]) || 0
    memo + (current_value < next_value ? -current_value : current_value)
  end
end

def lookup_numeral numeral
  lookup_table = { 'I' => 1, 'V' => 5, 'X' => 10, 'L' => 50, 'C' => 100, 'D' => 500, 'M' => 1000 }
  lookup_table[numeral]
end

# tests
if ARGV[0] == 'test'
  def assert actual, expected
    raise "expected #{expected}, got #{actual}" unless actual == expected
  end

  assert to_arabic('I'), 1
  assert to_arabic('II'), 2
  assert to_arabic('XI'), 11
  assert to_arabic('MMCXXXVIII'), 2138
  assert to_arabic('IX'), 9
  assert to_arabic('XIV'), 14
  assert to_arabic('MCMXCVIII'), 1998

  p 'all tests passed'
end

# sandbox
if __FILE__ == $0 && ARGV.empty?
  p 'sandbox'
end