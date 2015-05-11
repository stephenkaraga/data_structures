class Stack
  def initialize
    @storage   = {}
    @size = 0
  end

  def push(value)
    @storage[@size] = value
    @size += 1
  end

  def pop
    if @size > 0
      temp = @storage[@size - 1]
      @storage.delete(@size -= 1);
      temp
    end
  end

  def size
    @size
  end

end
