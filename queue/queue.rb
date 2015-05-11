class Queue
  def initialize
    @input = []
    @output = []
  end

  def enqueue(element)
    @input << element
  end

  def dequeue
    if @output.empty?
      while @input.any?
        @output << @input.pop
      end
    end

    @output.pop
  end
end
