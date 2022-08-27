module generate_random_array;

immutable int MAX_ELEM = 1000;

immutable(int[]) generateRandomArray(size_t length)
{
    import std.algorithm.iteration : map;
    import std.array : array;
    import std.random : uniform;
    import std.range : iota;

    return array(iota(0, length)
        .map!(_ => cast(immutable int) uniform(0, MAX_ELEM)));
}
